// 静态属性与静态方法
/* 
1. 不会被类实例所拥有的属性和方法 只是类自身拥有
2. 只能通过类调用
static 关键字 静态方法
*/
/* class Car {
  constructor() {
    this.speed = 0
    this.errors = 0
    Car.totalCar += 1
  }
  speedUp() {
    this.speed += 1
  }
  // 自检程序
  checker() {
    console.log('开始自检')
    // .....
    if (this.errors === 0) {
      console.log('检测完毕 一切正常')
    }
  }
  // 工厂检测员
  static checker() {
    console.log('我是检测员 开始检测')
  }
  // static repair(car) {
  //   console.log('我是修车的，我现在要修的车是:', car)
  //   if(!car.speed){
  //     car.speed=0
  //   }
  //   console.log(car)
  // }
} */
// Car.属性名 = 属性值 静态属性
/* Car.totalCar = 0
Car.config = {
  wheel: 4
}
const car = new Car()
new Car()
new Car()
new Car()
new Car()
new Car()
new Car()
new Car()
new Car()
new Car()
new Car()
new Car()
new Car()
new Car()
new Car()
new Car()
new Car()
new Car()
new Car()
new Car()
new Car()
new Car()
new Car()
new Car()
new Car()
car.checker()
Car.checker()
console.log(Car.totalCar) */
// Car.repair('沃尔沃')
// Car.repair({
//   color:'#f00'
// })
/* class Profession {
}
class Character {
  constructor(pfs) {
    this.pfs = pfs
  }
}
Character.config = {
  profession: {
    '太白': 1,
    '天香': 2,
    '真武': 3,
    '唐门': 4,
    '五毒': 5,
    '神威': 6,
    '神刀': 7,
    '移花': 8,
    '少林': 9,
    '丐帮': 10
  }
}
new Character(Character.config.profession['太白']) */
class Person {
  static format(programmer) {
    programmer.haveGirlFirend = true
    programmer.haveHair = true
  }
}
class Programmer {
  constructor() {
    this.haveGirlFirend = false
    this.haveHair = false
  }
}
const programmer = new Programmer()
Person.format(programmer)