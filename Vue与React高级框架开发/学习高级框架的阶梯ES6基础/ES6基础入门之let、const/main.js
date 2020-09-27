// 块级作用域
/* {
  var a = 1
  let b = 2
  {
    let c = 3
    console.log('b: ' + b)
    console.log('c: ' + c)
  }
  console.log('b: ' + b)
}
console.log('a: ' + a) */
// console.log('b: ' + b) // b 只在 {} 内生效

// let只作用在当前块级作用域内
/* for (let i = 0; i < 10; i++) {
  console.log(i)
} */
// console.log(i) // i undefined

// 使用let或者const声明的变量 不能在被重新声明
/* var a = 1
console.log(a) // 1
var a = 'a'
console.log(a) // a
let b = 'b'
let b = 'c' // b 不能重复定义 */

// let不存在`变量提升`
/* console.log(d)
let d = 'd' // 报错 Cannot access 'd' before initialization */

// 暂存死区
/* let a = 'a'
{
  console.log(a)
  let a = 'b'
}
console.log(a) // Cannot access 'd' before initialization */

// q: 生成十个按钮 每个按点击的时候弹出1 - 10
/* for (var i = 0; i < 10; i++) {
  function fn(i) {
    var btn = document.createElement('button')
    btn.innerText = i
    btn.onclick = function () {
      console.log(i)
    }
    document.body.appendChild(btn)
  }
  fn(i)
} */
for (let i = 0; i < 10; i++) {
  var btn = document.createElement('button')
  btn.innerText = i
  btn.onclick = function () {
    console.log(i)
  }
  document.body.appendChild(btn)
}

// 声明常量
const a = 1 // 必须赋值

// 常量声明后不能被修改
// a = 2

// 常量为引用类型的时候 可以修改该引用类型
/* const xm = {
  age: 14,
  name: '小米',
}
console.log(xm)
xm.age = 22
console.log(xm) */

// q1: 怎么防止常量为引用类型的时候能被修改的情况
// Object.freeze()
const xm = {
  age: 14,
  name: '小米',
}
// Object.freeze(xm)
console.log(xm)
xm.age = 22
console.log(xm)

// q2: es6之前怎么声明常量

// 1. 遍历属性和方法
// 2. 修改遍历到的属性的描述
// 3. Object.seal()
var CST = {}
Object.defineProperty(CST, 'BASE_NAME', {
  value: '小米',
  writable: false,
})
Object.seal(CST)
Object.defineProperty(Object, 'freezePolyfill', {
  value: function (obj) {
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        Object.defineProperty(obj,i,{
          writable:false
        })
      }
    }
    Object.seal(obj)
  },
})
Object.freezePolyfill(xm)
var obj1 = {
  a: 1,
  b: 2,
}
var obj2 = Object.create(obj1)
obj2.c = 3
obj2.d = 4
for (let i in obj2) {
  if (obj2.hasOwnProperty(i)) {
    document.body.innerHTML += i + ': ' + obj2[i] + '<br/>'
  }
}
