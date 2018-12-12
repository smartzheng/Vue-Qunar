<template>
  <div class="icons">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content"
                 :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.imgDesc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeIcons',
    data: function () {
      return {
        swiperOption: {
          autoplay: false,
          pagination: '.swiper-pagination'
        },
        iconItems: [{
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          imgDesc: '景点门票'
        },
          {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
            imgDesc: '泡温泉'
          }, {
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            imgDesc: '成都必游'
          },
          {
            id: '0004',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
            imgDesc: '川剧变脸'
          }, {
            id: '0005',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/5e/c640ec3b7d7ae802.png',
            imgDesc: '立减30'
          },
          {
            id: '0006',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
            imgDesc: '滑雪'
          }, {
            id: '0007',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            imgDesc: '一日游'
          },
          {
            id: '0008',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
            imgDesc: '成都熊猫基地'
          },
          {
            id: '0009',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
            imgDesc: '滑雪'
          }, {
            id: '00010',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            imgDesc: '一日游'
          },
          {
            id: '00011',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
            imgDesc: '看熊猫'
          }]
      }
    },
    computed: {
      pages () {
        const pages = []
        this.iconItems.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .swiper >>> .swiper-pagination-bullet-active
    background mediumaquamarine

  .icons >>> .swiper
    height 0
    padding-bottom 63%

    .icon
      position relative
      overflow hidden
      float left
      width 25%
      padding-bottom 25%
      margin-top .1rem

      .icon-img
        position absolute
        padding .1rem
        box-sizing border-box
        top 0
        left 0
        right 0
        bottom 0.44rem

        .icon-img-content
          display block
          margin 0 auto
          height 100%

      .icon-desc
        position absolute
        height .44rem
        line-height .44rem
        text-align center
        left 0
        right 0
        bottom 0
        color: $darkTextColor
        ellipsis()
</style>
