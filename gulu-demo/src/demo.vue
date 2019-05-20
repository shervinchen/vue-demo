<template>
  <div>
    <p>11111</p>
    <g-cascader :source="source" popover-height="200px"></g-cascader>
    <p>22222</p>
  </div>
</template>

<script>
import Cascader from "./cascader";

export default {
  name: "demo",
  components: {
    "g-cascader": Cascader
  },
  data() {
    return {
      source: [
        {
          name: "浙江",
          children: [
            {
              name: "杭州",
              children: [
                {
                  name: "上城"
                },
                {
                  name: "下城"
                },
                {
                  name: "江干"
                }
              ]
            },
            {
              name: "嘉兴",
              children: [
                {
                  name: "南湖"
                },
                {
                  name: "秀洲"
                },
                {
                  name: "嘉善"
                }
              ]
            },
            {
              name: "湖州"
            }
          ]
        },
        {
          name: "福建",
          children: [
            {
              name: "福州",
              children: [
                {
                  name: "鼓楼"
                },
                {
                  name: "台江"
                },
                {
                  name: "仓山"
                }
              ]
            },
            {
              name: "厦门"
            },
            {
              name: "莆田"
            },
            {
              name: "三明"
            },
            {
              name: "泉州"
            }
          ]
        },
        {
          name: "安徽",
          children: [
            {
              name: "合肥",
              children: [
                {
                  name: "瑶海"
                },
                {
                  name: "庐阳"
                }
              ]
            },
            {
              name: "芜湖"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
