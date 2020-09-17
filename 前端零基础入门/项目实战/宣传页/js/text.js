var screenAnimateElements = {
  '.screen-1': [
    '.screen-1-title',
    '.screen-1-phone',
    '.screen-1-shadow'
  ],
  '.screen-2': [
    '.screen-2-title',
    '.screen-2-subtitle',
    '.screen-2-phone',
    '.index-1',
    '.index-2',
    '.index-3'
  ],
  '.screen-3': [
    '.screen-3-title',
    '.screen-3-subtitle',
    '.screen-3-phone',
    '.screen-3-intro'
  ],
  '.screen-4': [
    '.screen-4-title',
    '.screen-4-subtitle',
    '.picture-1',
    '.picture-2',
    '.picture-3',
    '.picture-4'
  ],
  '.screen-5': [
    '.screen-5-title',
    '.screen-5-subtitle',
    '.screen-5-bg'
  ]
}
function setScreenAnimation(screenCls) {
  var screen = document.querySelector(screenCls), // 获取当前屏的元素
    animateElements = screenAnimateElements[screenCls], // 需要设置动画的元素
    isSetAnimateClass = false, // 是否有初始化子元素的样式
    isAnimateDone = false // 当前屏幕下所有子元素的状态是 done ?
  screen.onclick = function () {
    // 初始化样式，增加 init
    if (isSetAnimateClass === false) {
      for (var i = 0; i < animateElements.length; i++) {
        var element = document.querySelector(animateElements[i]),
          baseCls = element.getAttribute('class')
        element.setAttribute('class', baseCls + ' ' + animateElements[i].substr(1) + '-animate-init')
      }
      isSetAnimateClass = true
      return
    }
    // 切换所有 animateElements 的 init -> done
    if (isAnimateDone === false) {
      for (var i = 0; i < animateElements.length; i++) {
        var element = document.querySelector(animateElements[i]),
          baseCls = element.getAttribute('class')
        element.setAttribute('class', baseCls.replace('-animate-init', '-animate-done'))
      }
      isAnimateDone = true
      return
    }
    // 切换所有 animateElements 的 done -> init
    if (isAnimateDone === true) {
      for (var i = 0; i < animateElements.length; i++) {
        var element = document.querySelector(animateElements[i]),
          baseCls = element.getAttribute('class')
        element.setAttribute('class', baseCls.replace('-animate-done', '-animate-init'))
      }
      isAnimateDone = false
      return
    }
  }
}
for (j in screenAnimateElements) {
  setScreenAnimation(j)
}