<template>
  <div style="padding: 100px;">
    <g-date-picker :value="today" @input="today = $event"></g-date-picker>
    <!-- <g-date-range-picker :value="d" @input="d = $event" :scope="scope"></g-date-range-picker> -->
    <p>其他内容</p>
  </div>
</template>

<script>
import GDatePicker from './date-picker/date-picker'
import GDateRangePicker from "./date-picker/date-range-picker";

export default {
  name: "demo",
  components: {
    GDatePicker,
    GDateRangePicker
  },
  data() {
    return {
      today: new Date(),
      d: [],
      scope: [new Date(1958, 1), new Date(2118, 5)]
    };
  },
  methods: {
    
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