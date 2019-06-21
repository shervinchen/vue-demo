<template>
  <div style="padding: 100px;">
    <g-upload accept="image/*" action="http://frank.com/upload" name="avatar" :fileList.sync="fileList">
      <button>上传</button>
      <div>只能上传 300kb 以内的 png/jpeg 文件</div>
    </g-upload>
  </div>
</template>

<script>
export default {
  name: "demo",
  components: {
    
  },
  data() {
    return {
      fileList: []
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