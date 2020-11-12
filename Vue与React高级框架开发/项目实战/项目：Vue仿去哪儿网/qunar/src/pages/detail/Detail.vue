<template>
  <div class="attraction-detail">
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    />
    <detail-header :sightName="sightName" />
    <div class="content">
      <detail-list :list="categoryList" />
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'AttractionDetail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detaildata.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        res = res.data
        if (res.ret && res.data) {
          this.sightName = res.data.sightName
          this.bannerImg = res.data.bannerImg
          this.gallaryImgs = res.data.gallaryImgs
          this.categoryList = res.data.categoryList
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.attraction-detail
  .content
    height 50rem
</style>
