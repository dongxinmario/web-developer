// ES5继承的实现
// 原型
// 利用构造函数
/* function P() {
  this.name = 'parent'
  this.gender = 2
  this.say = function () {
    console.log('今天鸽了')
  }
}
P.prototype.test = function () {
  console.log('我是一个 test 方法')
}
function C() {
  P.call(this)
  this.name = 'child'
  this.age = 11
}
let child = new C()
child.say()
child.test() */
function P() {
  this.name = 'parent'
  this.gender = 2
  this.say = function () {
    console.log('今天鸽了')
  }
}
P.prototype.test = function () {
  console.log('我是一个 test 方法')
}
function C() {
  P.call(this)
  this.name = 'child'
  this.age = 11
}
C.prototype = new P()
let child = new C()
child.say()
child.test()
