<template>
  <div class="detail-header">
    <div class="header-abs" v-show="showAbs">
      <span class="iconfont back-icon" @click="backPage()">&#xe624;</span>
    </div>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <span class="iconfont back-icon" @click="backPage()">&#xe624;</span>
      {{ sightName }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  props: {
    sightName: String
  },
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    backPage () {
      this.$router.go(-1)
    },
    handleScroll () {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.detail-header
  .header-abs
    position absolute
    left 0.2rem
    top 0.2rem
    width 0.8rem
    height 0.8rem
    border-radius 0.4rem
    background rgba(0, 0, 0, 0.8)
    text-align center
    line-height 0.8rem
    .back-icon
      color #fff
      font-size 0.4rem
  .header-fixed
    z-index 2
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background $bgColor
    font-size 0.32rem
    .back-icon
      position absolute
      top 0
      left 0
      width 0.64rem
      text-align center
      font-size 0.4rem
      color #fff
</style>
