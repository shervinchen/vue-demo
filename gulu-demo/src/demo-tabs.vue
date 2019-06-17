<template>
  <div style="padding: 100px;">
    <!-- selected="selectedTab" @update:selected="selectedTabs = $event" -->
      <g-tabs :selected.sync="selectedTab" @update:selected="yyy">
        <g-tabs-head>
            <template slot="actions">
                <button>设置</button>
            </template>
            <g-tabs-item name="woman" disabled>
                <g-icon name="settings"></g-icon>美女
            </g-tabs-item>
            <g-tabs-item name="finance">
                财经
            </g-tabs-item>
            <g-tabs-item name="sports">
                体育
            </g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
            <g-tabs-pane name="woman">
                美女相关资讯
            </g-tabs-pane>
            <g-tabs-pane name="finance">
                财经相关资讯
            </g-tabs-pane>
            <g-tabs-pane name="sports">
                体育相关资讯
            </g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
  </div>
</template>

<script>
import GTabs from './tabs/tabs'
import GTabsItem from './tabs/tabs-item'
import GTabsHead from './tabs/tabs-head'
import GTabsPane from './tabs/tabs-pane'
import GTabsBody from './tabs/tabs-body'

export default {
  name: "demo",
  components: {
    GTabs,
    GTabsItem,
    GTabsHead,
    GTabsPane,
    GTabsBody
  },
  data() {
    return {
      selectedTab: 'finance'
    };
  },
  methods: {
    yyy(data) {
      console.log(data);
    },
  }
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
