<template>
  <div class="tabs">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: "GuluTabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    // this.$emit('update:selected', 'emit数据')
    this.eventBus.$emit('update:selected', this.selected)
    // this.$emit('update:selected', 'xxx')
  }
};
</script>

<style lang="scss" scoped>
</style>