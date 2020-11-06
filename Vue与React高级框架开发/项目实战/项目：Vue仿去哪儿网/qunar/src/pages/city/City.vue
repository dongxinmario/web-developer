<template>
  <div class="city">
    <city-header :cities="cities" />
    <city-list :city="city" :cities="cities" :hotCities="hotCities" :letter="letter" />
    <alphabet-list :cities="cities" @change="handleLetterChange" />
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CityList from './components/List'
import AlphabetList from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityList,
    AlphabetList
  },
  data () {
    return {
      city: '',
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityData () {
      axios.get('/api/citydata.json').then(res => {
        res = res.data
        if (res.ret && res.data) {
          this.city = res.data.city
          this.cities = res.data.cities
          this.hotCities = res.data.hotCities
        }
      })
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityData()
  }
}
</script>
<style lang="stylus"></style>
