// 多态
/* 
同一个接口 在不同情况下 做不一样的事情
相同的接口 不同的表现
扩充性与灵活性 暴露接口

接口本身只是一组定义 实现都是在类里面 需要子类去实现的方法
*/
class Human {
  say() {
    console.log('我是人')
  }
}
class Man extends Human {
  say() {
    super.say()
    console.log('我是五五开')
  }
}
class Woman extends Human {
  say() {
    super.say()
    console.log('我是乔碧萝')
  }
}
new Man().say()
new Woman().say()

// 重载
class simpleCalc {
  addCalc(...args) {
    if (args.length === 0) {
      return this.zero()
    }
    if (args.length === 1) {
      return this.onlyOneArgument(args)
    }
    return this.add(args)
  }
  zero() {
    return 0
  }
  onlyOneArgument() {
    return args[0]
  }
  add(args) {
    return args.reduce((a, b) => a + b, 0)
  }
}
function post(url, header, params) {
  if (!params) {
    params = header
    header = null
  }
}
post('https://www.imooc.com', {
  a: 1,
  b: 2,
})

const ModelMap = {
  红眼僵尸: 1,
  南瓜精: 2,
  独眼蝠: 3,
  绿眼僵尸: 4,
}
class Monster {
  constructor(name, level, model) {
    this.name = name
    this.level = level
    this.model = model
  }
  attack() {
    throw Error('必须由子类来实现`attack`(攻击)方法')
  }
}
class RedEyeZombie extends Monster {
  constructor() {
    super('红眼僵尸', 10, ModelMap['红眼僵尸'])
  }
}
class GreenEyeZombie extends Monster {
  constructor() {
    super('绿眼僵尸', 10, ModelMap['绿眼僵尸'])
  }
  attack() {
    console.log('绿眼僵尸发动了攻击')
  }
}
const gez = new GreenEyeZombie()
gez.attack()
const rez = new RedEyeZombie()
rez.attack()
