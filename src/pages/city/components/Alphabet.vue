<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      @click="handleItemClick"
      @touchmove="handleTouchMove"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
      :ref="item"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'CityAlphabet',
    computed: {
      letters () {
        const letters = []
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters
      }
    },
    data () {
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    props: {
      cities: Object
    },
    updated () {
      this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
      handleItemClick: function (e) {
        this.$emit('change', e.target.innerText)
      },
      handleTouchMove (e) {
        if (this.touchStatus) {
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 89
            const index = Math.floor((touchY - this.startY) / 20)
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change', this.letters[index])
            }
          }, 16)
        }
      },
      handleTouchStart () {
        this.touchStatus = true
      },
      handleTouchEnd () {
        this.touchStatus = false
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import '~styles/varibles.styl'

  .list
    right 0
    width .4rem
    flex-direction column
    justify-content center
    display flex
    bottom 0
    position absolute
    top 1.72rem

    .item
      line-height: .4rem
      text-align: center
      color $bgColor
</style>
