<template>
  <div style="padding: 100px;">
    <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
    <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
    <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
  </div>
</template>

<script>
import plugin from './plugin'
import GButton from "./button/button";
import Vue from 'vue'

Vue.use(plugin)

export default {
  name: "demo",
  components: {
    
  },
  data() {
    return {
      
    };
  },
  methods: {}
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// img {
//   max-width: 100%;
// }

// html {
//   --button-height: 32px;
//   --font-size: 14px;
//   --line-height: 14px;
//   --button-bg: white;
//   --button-active-bg: #eee;
//   --border-radius: 4px;
//   --color: #333;
//   --border-color: #999;
//   --border-color-hover: #666;
// }

// body {
//   font-size: var(--font-size);
// }
</style>