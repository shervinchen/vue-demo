<template>
  <div class="cascader-items" :style="{height: height}">
    <div class="left">
      <div
        class="label"
        v-for="(item, index) in items"
        :key="index"
        @click="leftSelected = item"
      >
        {{item.name}}
        <span v-if="item.children"> > </span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gulu-cascader-items :items="rightItems" :height="height"></gulu-cascader-items>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuluCascaderItems",
  props: {
    items: {
      type: Array
    },
    height: {
      type: String
    }
  },
  data() {
    return {
      leftSelected: null
    };
  },
  computed: {
    rightItems() {
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children;
      } else {
        return null;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'var';
.cascader-items {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100px;
  .left {
    height: 100%;
    padding: .3em 0;
  }
  .right {
    height: 100%;
    border-left: 1px solid $border-color;
  }
  .label {
    padding: .3em 1em;
  }
}
</style>