// 类表达式
// 函数表达式
// const a=function(){}
// 函数声明
// function a(){}
/* const Person = class P {
  constructor() {
    P.a = 1
    console.log(P)
    console.log('我是传奇')
  }
}
new Person()
console.log(P) */
const Person = new (class P {
  constructor() {
    P.a = 1
    console.log('我是传奇')
  }
})()
