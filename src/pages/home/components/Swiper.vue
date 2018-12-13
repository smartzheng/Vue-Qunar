<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="(item,index) of list" :key="index">
        <img class="swiper-img" :src="item.imgUrl" :id="item.id"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        }
      }
    },
    props: {
      list: Array
    },
    computed: {
      showSwiper () {
        return this.list.length
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background white

  .wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 25% //todo

    .swiper-img
      width 100%
</style>
