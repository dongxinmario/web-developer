// 全局变量
var index = 0, // 当前显示图片的索引，默认值为 0
  main = byId('main'),
  prev = byId('prev'), // 上一张
  next = byId('next'), // 下一张
  pics = byId('banner').getElementsByTagName('div'),
  size = pics.length,
  dots = byId('dots').getElementsByTagName('span'),
  timer = null, // 定时器
  menuContent = byId('menu-content'),
  menuItems = menuContent.getElementsByClassName('menu-item'),
  subMenu = byId('sub-menu'),
  innerBox = subMenu.getElementsByClassName('inner-box'),
  banner = byId('banner')
// 封装 getElementById()
function byId(id) {
  return typeof (id) === 'string' ? document.getElementById(id) : id
}
// 封装通用事件绑定方法 element 绑定事件的 DOM 元素 事件名 事件处理函数
function addHandler(element, type, handler) {
  // 非 IE浏览器
  if (element.addEventListener) {
    element.addEventListener(type, handler, true)
  }
  // IE 浏览器支持 DOM 2级
  else if (element.attachEvent) {
    element.attachEvent('on' + type, handler)
  }
  // IE 浏览器不支持 DOM 2级
  else {
    element['on' + type] = handler
  }
}
function changeImage() {
  for (var i = 0; i < size; i++) {
    pics[i].style.display = 'none'
    dots[i].className = ''
  }
  pics[index].style.display = 'block'
  dots[index].className = 'active'
}
// 点击 prev 按钮显示上一张图片
function prevImage() {
  index--
  if (index < 0) {
    index = size - 1
  }
  changeImage()
}
addHandler(prev, 'click', prevImage)
// 点击 next 按钮显示下一张图片
function nextImage() {
  index++
  if (index >= size) {
    index = 0
  }
  changeImage()
}
addHandler(next, 'click', nextImage)
// 点击圆点索引切换图片
for (var i = 0; i < size; i++) {
  dots[i].setAttribute('data-id', i)
  addHandler(dots[i], 'click', function () {
    index = this.getAttribute('data-id')
    changeImage()
  })
}
// 开启自动轮播
function startAutoPlay() {
  timer = setInterval(() => {
    index++
    if (index >= size) index = 0
    changeImage()
  }, 3000);
}
startAutoPlay()
// 清除定时器
function stopAutoPlay() {
  if (timer) {
    clearInterval(timer)
  }
}
// 鼠标滑入 main，停止轮播
addHandler(main, 'mouseover', stopAutoPlay)
// 鼠标离开 main，再次开启轮播
addHandler(main, 'mouseout', startAutoPlay)
// 鼠标滑过主菜单
for (var i = 0, idx, len = menuItems.length; i < len; i++) {
  // 给所有主菜单定义属性，标明它的索引
  menuItems[i].setAttribute('data-index', i)
  addHandler(menuItems[i], 'mouseover', function () {
    // 显示主菜单所在的背景
    subMenu.className = 'sub-menu'
    // 获取当前主菜单的索引
    idx = this.getAttribute('data-index')
    for (var m = 0, mlen = innerBox.length; m < mlen; m++) {
      innerBox[m].style.display = 'none'
      menuItems[m].style.background = 'none'
    }
    innerBox[idx].style.display = 'block'
    menuItems[idx].style.background = 'rgba(0, 0, 0, 0.1)'
  })
}
// 鼠标离开 banner，隐藏子菜单
addHandler(banner, 'mouseout', function () {
  subMenu.className = 'sub-menu hide'
})
addHandler(menuContent, 'mouseout', function () {
  subMenu.className = 'sub-menu hide'
})
addHandler(subMenu, 'mouseover', function () {
  this.className = 'sub-menu'
})
addHandler(subMenu, 'mouseout', function () {
  this.className = 'sub-menu hide'
})