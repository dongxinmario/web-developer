<template>
  <div>
    <div class="detail-banner" @click="showGallaryImg">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">
          {{ sightName }}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{ bannerImgs.length }}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary
        :imgs="bannerImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      />
    </fade-animation>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'detailBanner',
  components: {
    CommonGallary,
    FadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false
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
    background-image linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
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
