<template>
  <div class="home-header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.home-header
  display flex
  height $headerHeight
  line-height $headerHeight
  background $bgColor
  color #fff
  .header-left
    width 0.64rem
    float left
    .back-icon
      display block
      text-align center
      font-size 0.4rem
  .header-input
    flex 1
    background #fff
    border-radius 0.1rem
    height 0.64rem
    margin-top 0.12rem
    margin-left 0.2rem
    color #ccc
    line-height 0.64rem
    padding-left 0.2rem
  .header-right
    min-width 1.04rem
    padding 0 0.1rem
    float right
    color #fff
    text-align center
    .arrow-icon
      font-size 0.3rem
      margin-left -0.04rem
</style>
