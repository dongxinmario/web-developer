<template>
  <div class="home-header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      {{ this.city }}
      <span class="iconfont arrow-icon">&#xe6aa;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.home-header
  display flex
  height 0.86rem
  line-height 0.86rem
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
    width 1.24rem
    float right
    text-align center
    .arrow-icon
      font-size 0.3rem
      margin-left -0.04rem
</style>
