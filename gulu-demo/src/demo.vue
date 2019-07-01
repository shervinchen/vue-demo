<template>
  <div style="padding: 100px;">
    <template v-for="(error, index) in errors">
      <div :key="index">{{error}}</div>
    </template>
    <br>
    {{fileList}}
    <div>只能上传 300kb 以内的 png/jpeg 文件</div>
    <g-uploader
      :multiple="true"
      :size-limit="1024 * 1024"
      @error="errors=$event"
      :file-list.sync="fileList"
      :parseResponse="parseResponse"
      accept="image/*"
      method="POST"
      action="http://127.0.0.1:3000/upload"
      name="file"
    >
      <g-button icon="upload">上传</g-button>
    </g-uploader>
  </div>
</template>

<script>
import GUploader from "./uploader";
import GButton from "./button/button";

export default {
  name: "demo",
  components: {
    GUploader,
    GButton
  },
  data() {
    return {
      fileList: [],
      errors: []
    };
  },
  methods: {
    parseResponse(response) {
      let object = JSON.parse(response);
      let url = `http://127.0.0.1:3000/preview/${object.id}`;
      return url;
    },
    alert(error) {
      window.alert(error || "上传失败");
    }
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