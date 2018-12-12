<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item,index) of swiperItem" :key="index">
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
        },
        swiperItem:
          [
            {
              id: '0001',
              imgUrl: 'http://source.qunarzz.com/site/images/wns/20181130_dujiashouye_3_bingxuejie.jpg'
            },
            {
              id: '0002',
              imgUrl: 'http://source.qunarzz.com/site/images/wns/20181123_dujiashouye_4.jpg'
            }
          ]

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
