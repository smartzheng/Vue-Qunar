<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="weekend-item border-bottom" v-for="item of list" :key="item.id">
        <img class="weekend-img"
             :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    props: {list: Array}

  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/mixins.styl"
  .weekend-title
    height .8rem
    line-height .8rem
    text-indent .2rem
    background lightgray

  .weekend-item
    overflow hidden

    .weekend-img
      width 100%
      height 37.09%

    .item-info
      padding .1rem

      .item-title
        font-size .32rem
        line-height .54rem
        ellipsis()

      .item-desc
        color #bbb
        line-height: .4rem
        ellipsis()

</style>
