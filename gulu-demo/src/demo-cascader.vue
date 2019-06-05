<template>
  <div>
    <div style="padding: 20px;">
      <g-cascader
        :load-data="loadData"
        :selected.sync="selected"
        :source.sync="source"
        popover-height="200px"
      ></g-cascader>
    </div>
    <g-popover>
      <template slot="content">
        弹出内容
      </template>
      <g-button>点我</g-button>
    </g-popover>
  </div>
</template>

<script>
import Cascader from "./cascader/cascader";
import db from "../tests/fixtures/db";
import Popover from './popover'
// import {removeListener} from './click-outside'

// function ajax(parentId = 0, success, fail) {
//   let id = setTimeout(() => {
//     let result = db.filter(item => item.parent_id == parentId);
//     success(result);
//   }, 3000);
//   return id;
// }

function ajax(parentId = 0) {
  return new Promise((success, fail) => {
    setTimeout(() => {
      let result = db.filter(item => item.parent_id == parentId);
      result.forEach(node => {
        if (db.filter(item => item.parent_id === node.id).length > 0) {
          node.isLeaf = false;
        } else {
          node.isLeaf = true;
        }
      });
      success(result);
    }, 3000);
  });
}
// console.log(ajax());

export default {
  name: "demo",
  components: {
    "g-cascader": Cascader,
    "g-popover": Popover
  },
  data() {
    return {
      selected: [],
      source: []
    };
  },
  // destroyed() {
  //   removeListener()
  // },
  created() {
    // ajax(0, result => {
    //   this.source = result;
    // });

    ajax(0).then(result => {
      this.source = result
    });

    // this.source = [
    //   {
    //     name: "浙江",
    //     children: [
    //       {
    //         name: "杭州",
    //         children: [
    //           {
    //             name: "上城"
    //           },
    //           {
    //             name: "下城"
    //           },
    //           {
    //             name: "江干"
    //           }
    //         ]
    //       },
    //       {
    //         name: "嘉兴",
    //         children: [
    //           {
    //             name: "南湖"
    //           },
    //           {
    //             name: "秀洲"
    //           },
    //           {
    //             name: "嘉善"
    //           }
    //         ]
    //       },
    //       {
    //         name: "湖州"
    //       }
    //     ]
    //   },
    //   {
    //     name: "福建",
    //     children: [
    //       {
    //         name: "福州",
    //         children: [
    //           {
    //             name: "鼓楼"
    //           },
    //           {
    //             name: "台江"
    //           },
    //           {
    //             name: "仓山"
    //           }
    //         ]
    //       },
    //       {
    //         name: "厦门"
    //       },
    //       {
    //         name: "莆田"
    //       },
    //       {
    //         name: "三明"
    //       },
    //       {
    //         name: "泉州"
    //       }
    //     ]
    //   },
    //   {
    //     name: "安徽",
    //     children: [
    //       {
    //         name: "合肥",
    //         children: [
    //           {
    //             name: "瑶海"
    //           },
    //           {
    //             name: "庐阳"
    //           }
    //         ]
    //       },
    //       {
    //         name: "芜湖"
    //       }
    //     ]
    //   }
    // ];
  },
  methods: {
    loadData({ id }, updateSource) {
      ajax(id).then(result => {
        updateSource(result);
      });
    },
    xxx() {
      ajax(this.selected[0].id).then(result => {
        let lastLevelSelected = this.source.filter(
          item => item.id === this.selected[0].id
        )[0];
        // lastLevelSelected.children = result;
        this.$set(lastLevelSelected, "children", result);
      });
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

img {
  max-width: 100%;
}

html {
  --button-height: 32px;
  --font-size: 14px;
  --line-height: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}

body {
  font-size: var(--font-size);
}
</style>
