<template>
  <div>
    <g-nav :selected.sync="selected1" @update:selected="onChange">
      <g-nav-item name="home">首页</g-nav-item>
      <g-sub-nav name="about">
        <template slot="title">关于</template>
        <g-nav-item name="culture">企业文化</g-nav-item>
        <g-nav-item name="developers">开发团队</g-nav-item>
        <g-sub-nav name="contacts">
          <template slot="title">
            联系方式
          </template>
          <g-nav-item name="wechat">微信</g-nav-item>
          <g-nav-item name="qq">QQ</g-nav-item>
          <g-sub-nav name="phone">
            <template slot="title">
              手机
            </template>
            <g-nav-item name="cm">移动</g-nav-item>
            <g-nav-item name="cu">联通</g-nav-item>
            <g-nav-item name="cn">电信</g-nav-item>
          </g-sub-nav>
        </g-sub-nav>
      </g-sub-nav>
      <g-nav-item name="hire">招聘</g-nav-item>
    </g-nav>
    <p>{{selected1}}</p>
    <p>{{selected2}}</p>
    <g-nav :selected.sync="selected2" style="margin: 400px 0 0; width: 200px;" vertical>
      <g-nav-item name="home">首页</g-nav-item>
      <g-sub-nav name="about">
        <template slot="title">关于</template>
        <g-nav-item name="culture">企业文化</g-nav-item>
        <g-nav-item name="developers">开发团队</g-nav-item>
        <g-sub-nav name="contacts">
          <template slot="title">
            联系方式
          </template>
          <g-nav-item name="wechat">微信</g-nav-item>
          <g-nav-item name="qq">QQ</g-nav-item>
          <g-sub-nav name="phone">
            <template slot="title">
              手机
            </template>
            <g-nav-item name="cm">移动</g-nav-item>
            <g-nav-item name="cu">联通</g-nav-item>
            <g-nav-item name="cn">电信</g-nav-item>
          </g-sub-nav>
        </g-sub-nav>
      </g-sub-nav>
      <g-nav-item name="hire">招聘</g-nav-item>
    </g-nav>
  </div>
</template>

<script>
import GPopover from './popover'
import GNav from './nav/nav'
import GNavItem from './nav/nav-item'
import GSubNav from './nav/sub-nav'

export default {
  name: "demo",
  components: {
    GPopover,
    GNav,
    GNavItem,
    GSubNav
  },
  data() {
    return {
      selected1: 'cn',
      selected2: 'culture'
    };
  },
  created() {
    
  },
  methods: {
    onChange(selected) {
      if (selected.indexOf('home') >= 0) {
        console.log('onChange')
        // alert('hi')
      }
    }
  },
  watch: {
    selected1(newValue) {
      if (newValue === 'home') {
        console.log('selected')
        // alert('hi')
      }
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
