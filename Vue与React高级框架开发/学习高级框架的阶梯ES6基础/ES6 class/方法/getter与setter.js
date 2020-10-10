// getter setter
/* 
类似于给属性提供钩子 在获取属性值和设置属性值的时候做一些额外的事情
ES5 getter / setter
*/
// 1. 在对象字面量中书写 get / set 方法
/* const obj = {
  _name: '',
  get name() {
    return this._name
  },
  set name(val) {
    this._name = val
  },
}
obj.name = '电费' */
// 2. Object.defineProperty
/* let obj = {
  _name: '',
}
// Object.defineProperty(obj, 'age', {
//   value: 24,
//   enumerable: true, // 可改变 可被遍历
// })
Object.defineProperty(obj, 'name', {
  get: function () {
    console.log('正在访问 name')
    return this._name
  },
  set: function (val) {
    console.log('正在修改 name')
    this._name = val
  },
})
obj.name = '喜欢互踩' */
/* class Person {
  constructor() {
    this._name = ''
  }
  get name() {
    console.log('正在访问 name')
    return `我的名字是${this._name}`
  }
  set name(val) {
    console.log('正在修改 name')
    this._name = val
  }
}
const person = new Person()
person.name = '杀害' */
class AudioPlayer {
  constructor() {
    // 0 暂停 1 播放中 2 加载中
    this._status = 0
    this.status = 0
    this.init()
  }
  init(){
    const audio=new Audio()
    audio.src=''
    audio.oncanplay=()=>{
      audio.play()
      this.status=1

    }
  }
  get status() {
    return this._status
  }
  set status(val) {
    const STATUS_MAP = {
      0: '暂停',
      1: '播放',
      2: '加载中',
    }
    document.querySelector('#app .play-btn').innerText = STATUS_MAP[val]
    this._status = val
  }
}
const audio = new AudioPlayer()
