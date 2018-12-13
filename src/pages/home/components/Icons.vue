<template>
  <div class="icons">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content"
                 :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
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
        }

      }
    },
    props: {
      list: Array
    },
    computed: {
      pages () {
        const pages = []
        this.list.forEach((item, index) => {
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
