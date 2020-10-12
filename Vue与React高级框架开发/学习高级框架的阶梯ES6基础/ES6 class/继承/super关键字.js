// super 关键字
/* 
1. 作为父类构造函数调用
2. 作为对象的方式调用

1. 非静态方法中访问 super -> 父类原型
2. 在静态方法中访问 super -> 父类

在调用 super 父类的 this 始终是子类的 this
*/
class Human {
  constructor(name, age, sex, hobby) {
    this.name = name
    this.age = age
    this.sex = sex
    this.hobby = hobby
  }
  desc() {
    const { name, age, sex, hobby } = this
    console.log(`我叫${name}, 性别${sex}, 我今年${age}岁, 我喜欢${hobby}`)
  }
  eat() {
    console.log('吧唧吧唧')
  }
  checkThis(_this) {
    console.log(_this === this)
  }
}
Human.total = 100000
class FEEngineer extends Human {
  constructor(name, age, sex, hobby, skill, salary) {
    super(name, age, sex, hobby) // 代指父类的构造函数
    this.skill = skill
    this.salary = salary
  }
  say() {
    console.log(super.eat())
    console.log(super.checkThis(this))
    console.log(this.skill.join(', '))
  }
  static test() {
    console.log(super.name)
    console.log(super.total)
  }
}
const feer = new FEEngineer('反对党', 23, '男', '游戏', ['es6', 'vue', 'react', 'webgl'], '4k')
feer.desc()
feer.eat()
feer.say()
FEEngineer.test()
