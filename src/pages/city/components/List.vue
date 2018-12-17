<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area title border-topbottom">
        当前城市
      </div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">{{this.city}}</div>
        </div>
      </div>

      <div class="area title border-topbottom">
        热门城市
      </div>


      <div class="button-list">
        <div class="button-wrapper" v-for="(city,index) of hotCities" :key="index"
             @click="handleCityClick(city.name)"
        >
          <div class="button" :key="city.id">{{city.name}}</div>
        </div>
      </div>
      <div
        class="area"
        v-for="(cityGroup,key) of cities"
        :key="key"
        :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="city of cityGroup" :key="city.id"
             @click="handleCityClick (city.name)">
          <div class="item border-bottom">{{city.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: 'CityList',
    props: {
      cities: Object,
      hotCities: Array,
      letter: String
    },
    computed: {
      ...mapState(['city'])
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.wrapper)
    },
    methods: {
      handleCityClick (city) {
        this.changeCity(city)
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
    },
    watch: {
      letter () {
        this.scroll.scrollToElement(this.$refs[this.letter][0])
      }
    }
  }
</script>
<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/varibles.styl"
  .border-topbottom
    &:before
      border-color: #ccc

    &:after
      border-color: #ccc

  .border-bottom
    &:before
      border-color: #ccc

  .list
    left 0
    top 1.8rem
    bottom 0
    right 0
    overflow hidden
    position absolute

    .title
      color #666
      line-height .54rem
      background #eee
      font-size .26rem
      padding-left .2rem

    .button-list
      overflow hidden
      padding: .1rem .6rem .1rem .1rem

      .button-wrapper
        float: left
        width 33%

        .button
          margin .1rem
          padding: .1rem 0
          text-align center
          border-radius .06rem
          border .02rem solid #ccc

    .item-list
      .item
        line-height .76rem
        padding-left .2rem


</style>
