// 继承
/* 
继承可以让子类获得父类的方法、属性  可以扩充 增加新的方法 属性等
父类 / 基类 - 被继承的类
子类 - 继承后的类
extends
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
}
class FEEngineer extends Human {
  constructor(name, age, sex, hobby, skill, salary) {
    super(name, age, sex, hobby) // 代指父类的构造函数
    this.skill = skill
    this.salary = salary
  }
  say() {
    console.log(this.skill.join(', '))
  }
}
const feer = new FEEngineer('反对党', 23, '男', '游戏', ['es6', 'vue', 'react', 'webgl'], '4k')
feer.desc()
feer.eat()
feer.say()

/* 
网游 职业系统
基类 基础的职业类 代表一个角色
子类 代表一个具有职业的角色
*/
class Character {
  constructor(name, sex) {
    this.name = name
    this.sex = sex
    this.skill = []
  }
}
class Taibai extends Character {
  constructor(name, sex) {
    super(name, sex)
    this.initSkill()
  }
  initSkill() {
    this.skill = [
      {
        name: '云台三落',
        cd: 0,
        level: 1,
      },
      {
        name: '回风落雁',
        cd: 1,
        level: 1,
      },
    ]
  }
}
class Tianxiang extends Character {}
