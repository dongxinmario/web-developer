// 模拟一个音乐播放器类
class AudioPlayer {
  constructor(container) {
    this.container = document.querySelector(container)
    this.songsList = []
    this.dom = null
    this.audio = new Audio()
    this.status=0
    this.getSongs()
    this.createElement()
    this.bindEvents()
    this.render()
  }
  getSongs() {
    // ....ajax
    this.songsList = [
      {
        cover: '',// 封面
        url: '.mp3',// 资源地址
        singer: {},// 歌手的信息
        name: '',// 歌曲名
        duration: 0// 歌曲时长
      }
    ]
  }
  createElement(){
    // 生成 dom
    const div=document.createElement('div')
    div.innerHTML=`
    <div class="btn">播放按钮</div>
    <div>进度条</div>
    `
    this.dom=div
  }
  bindEvents(){
    this.dom.querySelector('.btn').addEventListener('click',()=>{
      console.log('开始播放')
    })
  }
  render(){
    this.container.appendChild(this.dom)
  }
}
new AudioPlayer('#app')
new AudioPlayer('#bpp')
new AudioPlayer('#cpp')
new AudioPlayer('#dpp')