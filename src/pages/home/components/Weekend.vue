<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="weekend-item border-bottom" v-for="item of weekendItems" :key="item.id">
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
    data: function () {
      return {
        weekendItems: [{
          id: '0001',
          title: '成都欢乐谷',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1507/a0/7087c85d439e4.jpg_r_640x214_4cd56a30.jpg',
          desc: '成都欢乐谷超级旋转过山车刺激到让你怀疑人生'
        }, {
          id: '0002',
          title: '国色天香',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1507/a0/7087c85d439e4.jpg_r_640x214_4cd56a30.jpg',
          desc: '国色天香超级旋转过山车刺激到让你怀疑人生'
        }, {
          id: '0003',
          title: '西岭雪山',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1507/a0/7087c85d439e4.jpg_r_640x214_4cd56a30.jpg',
          desc: '西岭雪山超级旋转过山车刺激到让你怀疑人生'
        }, {
          id: '0004',
          title: '成都大熊猫基地',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1507/a0/7087c85d439e4.jpg_r_640x214_4cd56a30.jpg',
          desc: '成都大熊猫基地超级旋转过山车刺激到让你怀疑人生'
        }]
      }
    }

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
      height 33.9%

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
