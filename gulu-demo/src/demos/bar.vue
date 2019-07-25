<template>
  <div class="bar" ref="bar">
    <div v-for="item in items" :key="item" class="bar-item"></div>
  </div>
</template>

<script>
export default {
  name: "Bar",
  props: {
    maxItems: {
        type: Number,
        required: true
    },
    itemCount: {
      type: Number,
      require: true
    },
    totalCount: {
      type: Number,
      require: true
    },
    itemSize: {
      type: Number,
      default: 10
    },
    gradient: {
      type: Array,
      required: true
    }
  },
  computed: {
    items() {
      let count = Math.round(
        (this.itemCount / this.totalCount) * this.maxItems
      );
      let arr = [];
      for (let i = 1; i <= count; i++) {
        arr.push(i);
      }
      return arr;
    }
  },
  mounted() {
    this.$refs.bar.style.width = `${this.items.length * (this.itemSize + 1) +
      1}px`;
    this.$refs.bar.style.height = `${this.itemSize}px`;
    this.$refs.bar.style.background = `linear-gradient(to right, ${this.gradient[0]}, ${this.gradient[1]})`
    let barItems = this.$refs.bar.children
    for (let i = 0; i < barItems.length; i++) {
        barItems[i].style.left = `${(i + 1) * (this.itemSize + 1)}px`
    }
  }
};
</script>

<style lang="scss" scoped>
.bar {
  position: relative;
  //   width: 419px;
  //   height: 10px;
//   background: linear-gradient(to right, #c6c6c6, #333);
}
.bar-item {
  position: absolute;
  top: 0;
  width: 1px;
  height: 100%;
  background-color: #fff;
}

// :class="`item-${item}`"
// $class-prefix: item-;
// @for $n from 1 through 38 {
//   &.#{$class-prefix}#{$n} {
//     left: #{$n * 11}px;
//   }
// }
</style>
