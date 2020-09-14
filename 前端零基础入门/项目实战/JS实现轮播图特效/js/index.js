// 全局变量
var index = 0, // 当前显示图片的索引，默认值为 0
  prev = byId('prev'), // 上一张
  next = byId('next') // 下一张
// 封装 getElementById()
function byId(id) {
  return typeof (id) === 'string' ? document.getElementById(id) : id
}
// 点击 next 按钮显示下一张图片
next.addEventListener('click', function () {
  alert(1)
})
next.addEventListener('click', function () {
  alert(2)
})