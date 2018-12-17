<template>
  <div>
    <home-header/>
    <home-swiper :list="swiperList"/>
    <home-icons :list="iconList"/>
    <home-recommend :list="recommendList"/>
    <home-weekend :list="weekendList"/>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeWeekend from './components/Weekend'
  import HomeRecommend from './components/Recommend'
  import axios from 'axios'
  import {mapState} from 'vuex'
  export default {
    name: 'Home',
    data () {
      return {
        lastCity: '',
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeWeekend,
      HomeRecommend
    },
    mounted () {
      this.lastCity = this.city
      this.getHomeInfo()
    },
    activated () {
      if (this.lastCity !== this.city) {
        this.lastCity = this.city
        this.getHomeInfo()
      }
    },
    computed:{
      ...mapState(['city'])
    },
    methods: {
      getHomeInfo () {
        axios.get('/static/mock/index.json?city=' + this.city)//todo pathReWrite无效?
          .then(this.showHomeInfo)
      },
      showHomeInfo (json) {
        const res = json.data
        if (res.ret && res.data) {
          this.swiperList = res.data.swiperList
          this.iconList = res.data.list
          this.recommendList = res.data.recommendList
          this.weekendList = res.data.weekendList
        }
      }
    }
  }
</script>

<style scoped>

</style>
