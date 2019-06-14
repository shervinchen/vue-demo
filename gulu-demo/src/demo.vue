<template>
  <div style="margin: 20px;">
    <g-pager :total-page="20" :current-page="20"></g-pager>
  </div>
</template>

<script>
import GPager from './pager'

export default {
  name: "demo",
  components: {
    GPager,
  },
  data() {
    return {

    };
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
