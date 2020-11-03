<template>
  <div class="home-recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="recommend-item border-bottom">
        <img
          src="https://imgs.qunarzz.com/sight/p0/2005/a9/a9411416ff215fe2a3.water.jpg_200x200_3110fb7b.jpg"
          class="item-img"
        />
        <div class="item-info">
          <p class="item-title">上海迪士尼乐园</p>
          <p class="item-desc">全球最大的迪士尼城堡</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
.home-recommend
  .recommend-title
    margin-top 0.2rem
    line-height 0.8rem
    background #eee
    text-indent 0.2rem
  .recommend-item
    display flex
    height 1.9rem
    overflow hidden
    .item-img
      width 1.7rem
      height 1.7rem
      padding 0.1rem
    .item-info
      flex 1
      padding 0.1rem
      .item-title
        line-height 0.54rem
        font-size 0.32rem
      .item-desc
        line-height 0.4rem
        color #ccc
      .item-btn
        background #ff9300
        padding 0 0.1rem
        border-radius 0.06rem
        margin-top .2rem
</style>
