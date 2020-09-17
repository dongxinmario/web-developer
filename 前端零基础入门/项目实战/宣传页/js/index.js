// 获取元素
var getElem = function (selector) {
  return document.querySelector(selector)
}
var getAllElem = function (selector) {
  return document.querySelectorAll(selector)
}
// 获取元素样式
var getCls = function (element) {
  return element.getAttribute('class')
}
// 设置元素样式
var setCls = function (element, cls) {
  return element.setAttribute('class', cls)
}
// 为元素添加样式
var addCls = function (element, cls) {
  var baseCls = getCls(element)
  if (baseCls.indexOf(cls) === -1) {
    setCls(element, baseCls + ' ' + cls)
  }
}
// 为元素删除样式
var delCls = function (element, cls) {
  var baseCls = getCls(element)
  if (baseCls.indexOf(cls) != -1) {
    setCls(element, baseCls.split(cls).join(' ').replace(/\s+/g, ' '))
  }
}
// 初始化样式 init
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
// 设置屏内元素为初始状态
var setScreenAnimateInit = function (screenCls) {
  var screen = document.querySelector(screenCls),
    animateElements = screenAnimateElements[screenCls]
  for (var i = 0; i < animateElements.length; i++) {
    var element = document.querySelector(animateElements[i]),
      baseCls = element.getAttribute('class')
    element.setAttribute('class', baseCls + ' ' + animateElements[i].substr(1) + '-animate-init')
  }
}
// 设置播放屏内的元素动画
var playScreenAnimateDone = function (screenCls) {
  var screen = document.querySelector(screenCls),
    animateElements = screenAnimateElements[screenCls]
  for (var i = 0; i < animateElements.length; i++) {
    var element = document.querySelector(animateElements[i]),
      baseCls = element.getAttribute('class')
    element.setAttribute('class', baseCls.replace('-animate-init', '-animate-done'))
  }
}
window.onload = function () {
  for (j in screenAnimateElements) {
    setScreenAnimateInit(j)
  }
}
// 滚动到哪，就播放到哪
var navItems = getAllElem('.nav-item'),
  outlineItems = getAllElem('.outline-item'),
  switchNavItemActive = function (idx) {
    for (var i = 0; i < navItems.length; i++) {
      delCls(navItems[i], 'active')
    }
    addCls(navItems[idx], 'active')
    for (var i = 0; i < outlineItems.length; i++) {
      delCls(outlineItems[i], 'active')
    }
    addCls(outlineItems[idx], 'active')
  }
window.onscroll = function () {
  var top = document.body.scrollTop || document.documentElement.scrollTop
  if (top > 80) {
    addCls(getElem('.header'), 'header-back')
    addCls(getElem('.outline'), 'outline-in')
  } else {
    delCls(getElem('.header'), 'header-back')
    delCls(getElem('.outline'), 'outline-in')
  }
  switchNavItemActive(0)
  if (top > 800 * 0) {
    playScreenAnimateDone('.screen-1')
  }
  if (top > 800 * 1 - 100) {
    playScreenAnimateDone('.screen-2')
    switchNavItemActive(1)
  }
  if (top > 800 * 2 - 100) {
    playScreenAnimateDone('.screen-3')
    switchNavItemActive(2)
  }
  if (top > 800 * 3 - 100) {
    playScreenAnimateDone('.screen-4')
    switchNavItemActive(3)
  }
  if (top > 800 * 4 - 100) {
    playScreenAnimateDone('.screen-5')
    switchNavItemActive(4)
  }
}
// 双向定位
var setNavJump = function (i, lib) {
  var item = lib[i]
  item.onclick = function () {
    if (document.body.scrollTop) {
      document.body.scrollTop = i * 800
    } else {
      document.documentElement.scrollTop = i * 800
    }
  }
}
for (var i = 0; i < navItems.length; i++) {
  setNavJump(i, navItems)
}
for (var i = 0; i < outlineItems.length; i++) {
  setNavJump(i, outlineItems)
}
// 滑动门特效