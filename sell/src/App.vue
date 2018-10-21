<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>
    <div class="content">
      I am content
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import vHeader from 'components/header/header'

export default {
  name: 'App',
  components: {
    vHeader
  }
}
</script>

<style lang="stylus" scoped>
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    .tab-item
      flex: 1
      text-align: center
</style>
