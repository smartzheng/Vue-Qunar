<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeWeekend from './components/Weekend'
  import HomeRecommend from './components/Recommend'
  import axios from 'axios'

  export default {
    name: 'Home',
    data () {
      return {
        city: '',
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
      this.getHomeInfo()
    },
    methods: {
      getHomeInfo () {
        axios.get('/static/mock/index.json')//todo pathReWrite无效?
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
