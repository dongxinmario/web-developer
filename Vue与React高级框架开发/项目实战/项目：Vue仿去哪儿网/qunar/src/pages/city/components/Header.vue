<template>
  <div class="city-header">
    <div class="city-title">
      <div>
        <span class="iconfont back-icon" @click="backPage()">&#xe624;</span>
      </div>
      <span>城市选择</span>
    </div>
    <div class="search">
      <input
        v-model="keyword"
        type="text"
        placeholder="输入城市名或拼音"
        class="search-city"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-if="hasList">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CityHeader',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasList () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    ...mapMutations(['changeCity']),
    backPage () {
      this.$router.go(-1)
    },
    handleCityClick (city) {
      this.changeCity(city)
      this.keyword = ''
      this.backPage()
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, {
      click: true
    })
  }
}
</script>
<style lang="stylus">
@import '~styles/varibles.styl'
.city-title
  position relative
  overflow hidden
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
.search
  height 0.72rem
  padding 0 0.1rem
  background $bgColor
  .search-city
    height 0.62rem
    line-height 0.62rem
    text-align center
    border-radius 0.06rem
    width 100%
    color #666
    box-sizing border-box
    padding 0 0.1rem
.search-content
  z-index 1
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  background #eee
  .search-item
    line-height 0.62rem
    padding-left 0.2rem
    color #666
    background #fff
</style>
