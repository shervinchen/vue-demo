<template lang="html">
  <div class="header">
    我是header
  </div>
</template>

<script>
export default {
  name: 'Header',
  mounted () {
    this.$api.article.test().then(res => {
      // 执行某些操作
      // console.log(res)
    })
  }
}
</script>

<style lang="stylus">

</style>
