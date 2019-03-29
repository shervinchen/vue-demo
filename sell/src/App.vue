<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link tag="a" :to="{ name: 'Goods', params: {} }">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link tag="a" :to="{ name: 'Ratings', params: {} }">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link tag="a" :to="{ name: 'Seller', params: {} }">商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import vHeader from 'components/header/Header'

export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    vHeader
  }
}
</script>

<style lang="stylus" scoped>
  @import 'common/stylus/mixin'
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>
