<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  },
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    colClass () {
        let {span, offset} = this
        return [span && `col-${span}`, offset && `offset-${offset}`]
    },
    colStyle () {
        return {
            paddingLeft: this.gutter / 2 + "px",
            paddingRight: this.gutter / 2 + "px"
        }
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  // height: 100px;
  // background: gray;
//   width: 50%;
  // border: 1px solid red;
  // padding: 0 10px;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>