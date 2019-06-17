<template>
  <div>
    <g-collapse :selected.sync="selectedTab" single>
        <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
    {{selectedTab}}
  </div>
</template>

<script>
import GCollapse from './collapse/collapse'
import GCollapseItem from './collapse/collapse-item'
export default {
  name: "demo",
  components: {
    GCollapse,
    GCollapseItem
  },
  data() {
    return {
      selectedTab: ["2", "1"]
    }
  },
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
