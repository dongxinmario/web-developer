<template>
  <div>
    <div class="detail-banner" @click="showGallaryImg">
      <img
        class="banner-img"
        src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg"
      />
      <div class="banner-info">
        <div class="banner-title">故宫(AAAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>39
        </div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    />
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'detailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1907/cd/cdd8448b61cd6042a3.img.jpg_r_800x800_e8f50aa2.jpg',
        'http://img1.qunarzz.com/wugc/p180/201306/16/7f08e81624346b1693835fbb.jpg_350x240_b09a9503.jpg'
      ]
    }
  },
  methods: {
    showGallaryImg () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.detail-banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    position absolute
    left 0
    right 0
    bottom 0
    line-height 0.6rem
    display flex
    color #fff
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex 1
      font-size 0.32rem
      padding 0 0.2rem
    .banner-number
      padding 0 0.4rem
      line-height 0.32rem
      font-size 0.24rem
      height 0.32rem
      border-radius 0.2rem
      background rgba(0, 0, 0, 0.8)
      margin-top 0.14rem
      .banner-icon
        font-size 0.24rem
        padding-right 0.1rem
</style>
