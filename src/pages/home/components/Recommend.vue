<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="recommend-item border-bottom" v-for="item of list" :key="item.id">
        <img class="recommend-img"
             :src="item.imgUrl">
        <div class="recommend-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',

    props: {
      list: Array
    }

  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/mixins.styl"
  .recommend-title
    height .8rem
    line-height .8rem
    text-indent .2rem
    background lightgray

  .recommend-item
    padding .1rem
    overflow hidden
    display flex

    .recommend-img
      width 2rem
      height 2rem

    .recommend-info
      padding .1rem
      flex 1
      min-width 0 //todo

      .item-title
        font-size .32rem
        line-height .54rem
        ellipsis()

      .item-desc
        color #bbb
        line-height: .4rem
        ellipsis()

      .item-button
        line-height: .44rem
        margin-top: .22rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff


</style>
