<template>
  <div style="padding: 100px;">
    <div style="overflow: hidden; padding: 150px 0 40px;">
      <g-popover position="bottom">
        <template slot="content" slot-scope="{close}">
          <div>文字</div>
          <div>
            popover
            <a href="http://qq.com">看新网</a>内容
          </div>
          <g-button @click="close">关闭</g-button>
        </template>
        <g-button>点我</g-button>
      </g-popover>
      <g-popover position="top">
        <template slot="content">
          <div>
            popover内容
            <g-button>关闭</g-button>
          </div>
        </template>
        <g-button>点我</g-button>
      </g-popover>
      <g-popover position="left">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>点我</g-button>
      </g-popover>
      <g-popover position="right">
        <template slot="content">
          <div>
            popover
            <a href="http://qq.com">看新网</a>内容
          </div>
        </template>
        <g-button>点我</g-button>
      </g-popover>
    </div>
    <div style="overflow: hidden; padding-bottom: 150px;">
      <g-popover position="bottom" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>点我</g-button>
      </g-popover>
      <g-popover position="top" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>点我</g-button>
      </g-popover>
      <g-popover position="left" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>点我</g-button>
      </g-popover>
      <g-popover position="right" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>点我</g-button>
      </g-popover>
    </div>
  </div>
</template>

<script>
import GPopover from './popover'
import GButton from './button/button'

export default {
  name: "demo",
  components: {
    GPopover
  },
  data() {
    return {};
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
