<template>
  <div class="page">
    <bar :itemCount="39" :totalCount="77" :maxItems="38" :itemSize="10" :gradient="['#c6c6c6', '#333']"></bar>
  </div>
</template>

<script>
import Bar from "./bar";
export default {
  name: "demo-bar",
  components: {
    Bar
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page {
  padding: 100px;
}

</style>