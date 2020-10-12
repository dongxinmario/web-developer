// 1. 对图片进行分类
// 2. 生成dom元素
// 3. 绑定事件
// 4. 显示到页面上
;(function (window, document) {
  // 公共方法集合
  const methods = {
    appendChild(parent, ...children) {
      children.forEach((el) => {
        parent.appendChild(el)
      })
    },
    $(selector, root = document) {
      return root.querySelector(selector)
    },
    $$(selector, root = document) {
      return root.querySelectorAll(selector)
    },
  }
  let Img = function (options) {
    this.init(options)
    this.createElement()
    this.bind()
    this.show()
  }
  // 初始化
  Img.prototype.init = function ({ data, initType, parasitifer }) {
    this.types = ['全部'] // 所有的分类
    this.all = [] // 所有图片元素
    this.classified = { 全部: [] } // 按照类型分类后的图片
    this.curType = initType // 当前显示的图片分类
    this.parasitifer = methods.$(parasitifer) // 挂载点
    this.classify(data)
    this.imgContainer = null // 所有图片的容器
    this.wrap = null // 整体容器
    this.typeBtnEls = null // 所有分类按钮组成的数组
    this.figures = null // 所有当前显示的图片组成的数组
  }
  // 分类图片
  Img.prototype.classify = function (data) {
    let srcs = []
    data.forEach(({ title, type, alt, src }) => {
      if (!this.types.includes(type)) {
        this.types.push(type)
      }
      if (!Object.keys(this.classified).includes(type)) {
        this.classified[type] = []
      }
      if (!srcs.includes(src)) {
        // 图片没有生成过 生成图片 添加到 对应的分类中
        srcs.push(src)
        let figure = document.createElement('figure')
        let img = document.createElement('img')
        let figcaption = document.createElement('figcaption')
        img.src = src
        img.alt = alt
        figcaption.innerText = title
        methods.appendChild(figure, img, figcaption)
        this.all.push(figure)
        this.classified[type].push(this.all.length - 1)
      } else {
        // 去 all 中 找到对应的图片 添加到对应的分类中
        this.classified[type].push(srcs.findIndex((s1) => s1 === src))
      }
    })
  }
  // 根据分类获取图片
  Img.prototype.getImgsByType = function (type) {
    return type === '全部' ? [...this.all] : this.classified[type].map((index) => this.all[index])
  }
  // 生成 dom 元素
  Img.prototype.createElement = function () {
    // 创建分类按钮
    let typesBtn = []
    for (let type of this.types.values()) {
      typesBtn.push(`
      <li class="img-classify-type-btn ${type === this.curType ? ' active' : ''}">${type}</li>
      `)
    }
    // 整体模板
    let template = `
    <ul class="img-classify">
      ${typesBtn.join('')}
    </ul>
    <div class=img-container></div>
    `
    let wrap = document.createElement('div')
    wrap.className = 'Img-container'
    wrap.innerHTML = template
    this.imgContainer = methods.$('.img-container', wrap)
    methods.appendChild(this.imgContainer, ...this.getImgsByType(this.curType))
    this.wrap = wrap
    this.typeBtnEls = methods.$$('img-classify-type-btn', wrap)
    this.figures = [...methods.$$('figure', wrap)]
    // 遮罩层
    let overlay = document.createElement('div')
    overlay.className = 'img-overlay'
    overlay.innerHTML = `
    <div class="prev-btn"></div>
    <div class="next-btn"></div>
    <img src="" alt="" />
    `
    methods.appendChild(this.wrap, overlay)
    this.overlay = overlay
    this.prevImg = methods.$('img', overlay)
    this.calcPosition(this.figures)
  }
  Img.prototype.diff = function (preveImgs, nextImgs) {
    let diffArr = []
    preveImgs.forEach((src1, index1) => {
      let index2 = nextImgs.findIndex((src2) => src1 === src2)
      if (index2 !== -1) {
        diffArr.push([index1, index2])
      }
    })
    return diffArr
  }
  // 事件绑定
  Img.prototype.bind = function () {
    methods.$('.img-classify', this.wrap).addEventListener('click', ({ target }) => {
      if (target.nodeName !== 'LI') return
      const type = target.innerText,
        els = this.getImgsByType(type)
      let prevImgs = this.figures.map((figure) => methods.$('img', figure).src),
        nextImgs = els.map((figure) => methods.$('img', figure).src)
      const diffArr = this.diff(prevImgs, nextImgs)
      diffArr.forEach(([, nextIndex]) => {
        this.figures.every((figure, index) => {
          let src = methods.$('img', figure).src
          if (src === nextImgs[nextIndex]) {
            this.figures.splice(index, 1)
            return false
          }
          return true
        })
      })
      this.calcPosition(els)
      let needAppendEls = []
      if (diffArr.length) {
        let nextElsIndex = diffArr.map(([, nextIndex]) => nextIndex)
        els.forEach((figure, index) => {
          if (!nextElsIndex.includes(index)) needAppendEls.push(figure)
        })
      } else {
        needAppendEls = els
      }
      this.figures.forEach((el) => {
        el.style.transform = 'scale(0, 0) translate(0%, 100%)'
        el.style.opacity = '0'
      })
      methods.appendChild(this.imgContainer, ...needAppendEls)
      setTimeout(() => {
        els.forEach((el) => {
          el.style.transform = 'scale(1, 1) translate(0, 0)'
          el.style.opacity = '1'
        })
      })
      setTimeout(() => {
        this.figures.forEach((figure) => {
          this.imgContainer.removeChild(figure)
        })
        this.figures = els
      }, 600)
    })
  }
  // 显示元素
  Img.prototype.show = function () {
    methods.appendChild(this.parasitifer, this.wrap)
    setTimeout(() => {
      this.figures.forEach((figure) => {
        figure.style.transform = 'scale(1, 1) translate(0, 0)'
        figure.style.opacity = '1'
      })
    })
  }
  Img.prototype.calcPosition = function (figures) {
    let horizontalImgIndex = 0
    figures.forEach((figure, index) => {
      figure.style.top = parseInt(index / 4) * 140 + parseInt(index / 4) * 15 + 'px'
      figure.style.left = horizontalImgIndex * 240 + horizontalImgIndex * 15 + 'px'
      figure.style.transform = 'scale(0, 0) translate(0, -100%)'
      horizontalImgIndex = (horizontalImgIndex + 1) % 4
    })
    let len = Math.ceil(figures.length / 4)
    this.imgContainer.style.height = len * 140 + (len - 1) * 15 + 'px'
  }
  window.$Img = Img
})(window, document)
