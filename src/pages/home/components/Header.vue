<template>
  <div class="header">
    <div class="header_left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header_input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header_right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'HomeHeader',
    props: {
      city: String
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    background: $bgColor;
    line-height: .86rem;
    height: .86rem;
    display: flex;
    color: white;

  .header_left
    width: .64rem;
    float: left;

    .back-icon
      text-align: center;
      font-size: .4rem;

  .header_right
    width: 1.24rem;
    color  white
    text-align: center;

    .arrow-icon
      font-size: .24rem;
      margin-left: -.04rem;

  .header_input
    flex: 1;
    background: white;
    border-radius: .1rem;
    margin-top: .12rem;
    line-height: .64rem;
    height: .64rem;
    margin-left: .2rem;
    color: #ccc;
    padding-left: .2rem;

</style>
