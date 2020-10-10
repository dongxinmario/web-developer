// name
// new.target
// class Person {}
// console.log(Person.name) Person
// const Humen = class P {}
// console.log(Humen.name) P
// class Car {
//   constructor() {
//     console.log(new.target)
//   }
// }
// new Car()
// 语法糖
/* function Car() {
  // if (new.target !== Car) {
  //   throw Error('必须使用 new 关键字调用 Car')
  // }
  if (!(this instanceof Car)) {
    throw Error('必须使用 new 关键字调用 Car')
  }
}
// Car()
new Car() */
class Car{
  constructor(){
    console.log(new.target);
  }
}
Car()