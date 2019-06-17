<template>
  <div style="padding: 100px;">
    <g-row>
      <g-col span="23" offset="1" :narrow-pc="{span:12, offset:12}">
        <div class="demo"></div>
      </g-col>
    </g-row>
    <div style="border: 1px solid black;">
      <g-row gutter="20">
        <g-col span="24" :ipad="{span:8}" :narrow-pc="{span:4}" :pc="{span:2}" :wide-pc="{span:1}">1</g-col>
        <g-col
          span="24"
          :ipad="{span:16}"
          :narrow-pc="{span:20}"
          :pc="{span:22}"
          :wide-pc="{span:23}"
        >11</g-col>
      </g-row>
      <g-row gutter="20">
        <g-col span="4">1</g-col>
        <g-col span="20">11</g-col>
      </g-row>
      <g-row gutter="20">
        <g-col span="4">1</g-col>
        <g-col span="18" offset="2">11</g-col>
      </g-row>
      <g-row gutter="20">
        <g-col span="4">1</g-col>
        <g-col span="8" offset="2">11</g-col>
        <g-col span="8" offset="2">11</g-col>
      </g-row>
      <g-row gutter="20">
        <g-col span="4">1</g-col>
        <g-col span="4" offset="6">11</g-col>
        <g-col span="8" offset="2">11</g-col>
      </g-row>
    </div>
  </div>
</template>

<script>
import GRow from "./grid/row";
import GCol from "./grid/col";

export default {
  name: "demo",
  components: {
    GRow,
    GCol
  },
  data() {
    return {};
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