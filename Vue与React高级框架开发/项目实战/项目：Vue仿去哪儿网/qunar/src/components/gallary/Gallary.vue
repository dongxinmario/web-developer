<template>
  <div class="common-gallary" @click="handleGallaryImg">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img :src="item" class="gallary-img" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryImg () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
.common-gallary>>>.swiper-container
  overflow inherit
.common-gallary
  position fixed
  display flex
  flex-direction column
  justify-content center
  left 0
  right 0
  top 0
  bottom 0
  background #000
  z-index 50
  .wrapper
    width 100%
    height 0
    padding-bottom 100%
    .gallary-img
      width 100%
    .swiper-pagination
      color #fff
      bottom -1rem
</style>
