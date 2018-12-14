<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities" ></city-search>
    <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'
  import axios from 'axios'

  export default {
    name: 'City',
    data: function () {
      return {
        hotCities: [],
        cities: {},
        letter: ''
      }
    },
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    },
    methods: {
      getCityInfo () {
        axios.get('/static/mock/city.json')
          .then(this.showCityInfo)
      },
      showCityInfo (json) {
        const res = json.data
        if (res.ret && res.data) {
          const data = res.data
          this.cities = data.cities
          this.hotCities = data.hotCities
        }
      },
      handleLetterChange (letter) {
        this.letter = letter
      }
    },
    mounted () {
      this.getCityInfo()
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
