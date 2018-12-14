<template>
  <div class="header">
    城市选择
    <router-link to="/">
    <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'CityHeader'
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    position relative
    background: $bgColor
    color white
    height $headerHeight
    text-align center
    font-size .32rem
    line-height $headerHeight
    .header-back
      color white
      position absolute
      width: .64rem;
      float: left;
      top 0
      left 0
      bottom 0
</style>
