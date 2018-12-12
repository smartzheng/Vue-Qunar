<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="recommend-item border-bottom" v-for="item of recommendItems" :key="item.id">
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
    data: function () {
      return {
        recommendItems: [{
          id: '0001',
          title: '成都欢乐谷',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1807/ad/ad574bfe6c9e1ceda3.img.png_200x200_ea7a0734.png',
          desc: '成都欢乐谷超级旋转过山车刺激到让你怀疑人生'
        }, {
          id: '0002',
          title: '国色天香',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_200x200_6064e939.jpg',
          desc: '国色天香超级旋转过山车刺激到让你怀疑人生'
        }, {
          id: '0003',
          title: '西岭雪山',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/53/53c486532f848d71.img.jpg_200x200_c4be246c.jpg',
          desc: '西岭雪山超级旋转过山车刺激到让你怀疑人生'
        }, {
          id: '0004',
          title: '成都大熊猫基地',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_200x200_697c3b3f.jpg',
          desc: '成都大熊猫基地超级旋转过山车刺激到让你怀疑人生'
        }]
      }
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
