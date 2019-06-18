<template>
  <div style="padding: 100px;">
    {{selected}}
    <div style="margin: 20px;">
      <g-table :columns="columns" :data-source="dataSource" bordered :selected-items.sync="selected"></g-table>
    </div>
    <div style="margin: 20px;">
      <g-table :columns="columns" :data-source="dataSource" bordered compact :striped="false"></g-table>
    </div>
    <div style="margin: 20px;">
      <g-pager :total-page="10" :current-page.sync="currentPage"></g-pager>
    </div>
  </div>
</template>

<script>
import GPager from './pager'
import GTable from './table'

export default {
  name: "demo",
  components: {
    GPager,
    GTable
  },
  data() {
    return {
      currentPage: 1,
      selected: [],
      columns: [
        {
          text: '姓名',
          field: 'name'
        },
        {
          text: '分数',
          field: 'score'
        }
      ],
      dataSource: [
        {
          id: 1,
          name: '小花',
          score: 100,
        },
        {
          id: 2,
          name: '小明',
          score: 99,
        },
        {
          id: 3,
          name: '圆圆',
          score: 67,
        },
        {
          id: 4,
          name: '张三',
          score: 58,
        },
        {
          id: 5,
          name: '王五',
          score: 43,
        },
        {
          id: 6,
          name: '李四',
          score: 62,
        },
        {
          id: 7,
          name: '超人',
          score: 77,
        },
        {
          id: 8,
          name: '蝙蝠侠',
          score: 88,
        }
      ]
    };
  },
  methods: {
    x(object) {
      let {selected, item, index} = object
      if (selected) {
        this.selected.push(item)
      } else {
        let index = this.selected.indexOf(item)
        this.selected.splice(index, 1)
      }
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