<template>
  <div style="padding: 100px;">
    <div class="box">
        <g-input value="张三" disabled></g-input>
        <g-input value="李四" readonly></g-input>
        <g-input value="王五"></g-input>
    </div>
    <div class="box">
        <g-input v-model="message"></g-input>
        <p>{{message}}</p>
        <button @click="message+=1">+1</button>
    </div>
    <div class="box">
        <g-input value="王" error="姓名不能少于两个字"></g-input>
    </div>
  </div>
</template>

<script>
import GInput from "./input";

export default {
  name: "demo",
  components: {
    GInput
  },
  data() {
    return {
      message: "hi",
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