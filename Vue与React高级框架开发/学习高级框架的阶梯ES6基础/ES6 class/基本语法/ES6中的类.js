// 车类
class Car {
  // 构造函数-(工厂接头人)
  // 实例化-(造车的过程)=>类创建对象的过程
  constructor(wheel, color, length, width) {
    this.wheel = wheel
    this.color = color
    this.length = length
    this.width = width
    this.speed = 0
  }
  // 加速
  speedUp() {
    this.speed += 1
  }
}
const car1 = new Car(4, '#000', 20, 40)
const car2 = new Car(4, '#f00', 44, 22)
console.log(car1)
console.log(car2)