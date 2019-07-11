<template>
  <div class="popover" ref="popover">
    <div
      ref="contentWrapper"
      class="gulu-popover-content-wrapper"
      :class="{ [`position-${position}`]: true, popClassName }"
      v-if="visible"
    >
      <slot name="content" :close="close"></slot>
    </div>
    <span style="display: inline-block;" ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "GuluPopover",
  data() {
    return {
      visible: false
    };
  },
  mounted() {
    this.addPopoverListeners();
  },
  beforeDestroy() {
    this.putBackContent();
    this.removePopoverListeners();
  },
  computed: {
    openEvent() {
      if (this.trigger === "click") {
        return "click";
      } else {
        return "mouseenter";
      }
    },
    closeEvent() {
      if (this.trigger === "click") {
        return "click";
      } else {
        return "mouseleave";
      }
    }
  },
  props: {
    popClassName: {
      type: String
    },
    container: {
      type: Element
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      }
    },
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].indexOf(value) >= 0;
      }
    }
  },
  methods: {
    addPopoverListeners() {
      if (this.trigger === "click") {
        this.$refs.popover.addEventListener("click", this.onClick);
      } else {
        this.$refs.popover.addEventListener("mouseenter", this.open);
        this.$refs.popover.addEventListener("mouseleave", this.close);
      }
    },
    removePopoverListeners() {
      if (this.trigger === "click") {
        this.$refs.popover.removeEventListener("click", this.onClick);
      } else {
        this.$refs.popover.removeEventListener("mouseenter", this.open);
        this.$refs.popover.removeEventListener("mouseleave", this.close);
      }
    },
    putBackContent() {
      const { contentWrapper, popover } = this.$refs;
      if (!contentWrapper) {
        return;
      }
      popover.appendChild(contentWrapper);
    },
    positionContent() {
      const { contentWrapper, triggerWrapper } = this.$refs;
      (this.container || document.body).appendChild(contentWrapper);
      const {
        width,
        height,
        top,
        left
      } = triggerWrapper.getBoundingClientRect();
      const { height: height2 } = contentWrapper.getBoundingClientRect();
      let positions = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX
        },
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX + width
        }
      };
      contentWrapper.style.left = `${positions[this.position].left}px`;
      contentWrapper.style.top = `${positions[this.position].top}px`;
    },
    onClickDocument(e) {
      if (
        this.$refs.popover &&
        (this.$refs.popover === e.target ||
          this.$refs.popover.contains(e.target))
      ) {
        return;
      }
      if (
        this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === e.target ||
          this.$refs.contentWrapper.contains(e.target))
      ) {
        return;
      }
      this.close();
    },
    open() {
      this.visible = true;
      this.$emit('open')
      this.$nextTick(() => {
        this.positionContent();
        document.addEventListener("click", this.onClickDocument);
      });
    },
    close() {
      this.visible = false;
      this.$emit('close')
      document.removeEventListener("click", this.onClickDocument);
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible) {
          this.close();
        } else {
          this.open();
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.gulu-popover-content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  //   box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: white;
  padding: 0.5em 1em;
  // max-width: 20em;
  word-break: break-all;
  &::before,
  &::after {
    content: "";
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }
  &.position-top {
    margin-top: -10px;
    transform: translateY(-100%);
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-top-color: black;
      border-bottom: none;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      border-bottom: none;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-bottom-color: black;
      border-top: none;
      bottom: 100%;
    }
    &::after {
      border-bottom-color: white;
      border-top: none;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    margin-left: -10px;
    transform: translateX(-100%);
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      left: 100%;
      border-right: none;
      border-left-color: black;
    }
    &::after {
      left: calc(100% - 1px);
      border-right: none;
      border-left-color: white;
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      right: 100%;
      border-left: none;
      border-right-color: black;
    }
    &::after {
      right: calc(100% - 1px);
      border-left: none;
      border-right-color: white;
    }
  }
}
</style>
