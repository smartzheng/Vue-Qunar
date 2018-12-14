<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="请输入城市名"/>
  </div>
</template>

<script>
  export default {
    name: 'CitySearch'
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
      line-height .62rem
      background white
      text-align center
      color #666
      border-radius .06rem

</style>
