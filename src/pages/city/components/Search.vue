<template>
  <div>
    <div class="search">
      <input
        ref="input"
        v-model="keyword"
        class="search-input"
        type="text"
        placeholder="请输入城市名"/>
    </div>
    <div
      ref="content"
      class="search-content"
      v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="city of result" :key="city.id"
            @click="handleCityClick(city.name)">{{city.name}}
        </li>
        <li class="search-no-result" v-if="noResult">没有找到相关城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'

  export default {
    name: 'CitySearch',
    props: {
      cities: Object
    },
    data () {
      return {
        result: [],
        keyword: '',
        timer: null
      }
    },
    methods: {
      handleCityClick (city) {
        this.$store.commit('changeCity', city)
        this.$router.push('/')
      }
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.content)
    },
    computed: {
      noResult () {
        return !this.result.length && this.keyword
      }
    },
    watch: {
      keyword () {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        setTimeout(() => {
          const arr = []
          for (let item in this.cities) {
            this.cities[item].forEach((city) => {
              if (city.name.indexOf(this.keyword) > -1 || city.spell.indexOf(this.keyword) > -1) {
                arr.push(city)
              }
            })
          }
          this.result = arr
        })
      }
    }
  }
</script>
<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/varibles.styl"
  .search
    height .72rem
    background $bgColor
    padding .1rem

    .search-input
      width 100%
      box-sizing border-box
      height .62rem
      padding 0 .1rem
      line-height .4rem
      background white
      text-align center
      color #666
      border-radius .06rem

  .search-content
    position absolute
    overflow hidden
    bottom 0
    left 0
    top 1.68rem
    right 0
    background #eee
    z-index 999

    .search-item
      padding-left .2rem
      line-height: .62rem
      color #666

    .search-no-result
      padding-left .2rem
      line-height: .62rem
      color #666


</style>
