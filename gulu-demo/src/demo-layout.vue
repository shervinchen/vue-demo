<template>
  <div style="padding: 100px;">
    <g-layout style="height: 100vh;">
      <g-sider>g-sider</g-sider>
      <g-layout>
        <g-header>header</g-header>
        <g-content>content</g-content>
        <g-footer>footer</g-footer>
      </g-layout>
    </g-layout>
  </div>
</template>

<script>
import GLayout from "./layout/layout";
import GHeader from "./layout/header";
import GContent from "./layout/content";
import GFooter from "./layout/footer";
import GSider from "./layout/sider";

export default {
  name: "demo",
  components: {
    GLayout,
    GHeader,
    GContent,
    GFooter,
    GSider
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

<style lang="scss">
  .demo {
    border: 1px solid #666;
    min-height: 100px;
  }
  .sider {
    background: #333;
    width: 150px;
  }
  .sider.slide-enter, .sider.slide-leave-to {
    margin-left: -150px;
  }
  .header {
    background: #999;
    height: 100px;
  }
  .footer {
    background: #ccc;
    height: 50px;
  }
</style>