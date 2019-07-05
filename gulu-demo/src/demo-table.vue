<template>
  <div style="padding: 100px;">
    {{selected}}
    <div style="margin: 20px;">
      <g-table checkable expend-field="description" :height="400" :loading="loading" :data-source="dataSource" bordered :selected-items.sync="selected" :order-by.sync="orderBy" @update:orderBy="x">
        <template slot-scope="xxx">
          <g-button @click="edit(xxx.item)">编辑</g-button>
          <g-button @click="view(xxx.item)">查看</g-button>
          <g-button>删除</g-button>
        </template>
        <g-table-column text="姓名" field="name" :width="100">
          <template slot-scope="props">
            <a href="#">{{props.value}}</a>
          </template>
        </g-table-column>
        <g-table-column text="分数" field="score"></g-table-column>
      </g-table>
    </div>
    <!-- <div style="margin: 20px;">
      <g-table :columns="columns" :data-source="dataSource" bordered compact :striped="false"></g-table>
    </div>
    <div style="margin: 20px;">
      <g-pager :total-page="10" :current-page.sync="currentPage"></g-pager>
    </div> -->
  </div>
</template>

<script>
import GPager from './pager'
import GTable from './table'
import GTableColumn from './table-column'
import GButton from './button/button'
import { mkdir } from 'fs';

export default {
  name: "demo",
  components: {
    GPager,
    GTable,
    GButton,
    GTableColumn
  },
  data() {
    return {
      currentPage: 1,
      selected: [],
      loading: false,
      // columns: [
      //   {
      //     text: '姓名',
      //     field: 'name',
      //     width: 100
      //   },
      //   {
      //     text: '分数',
      //     field: 'score'
      //   }
      // ],
      orderBy: {
        score: 'desc'
      },
      dataSource: [
        {
          id: 1,
          name: '小花',
          score: 100,
          description: 'xxxx xxxx'
        },
        {
          id: 2,
          name: '小明',
          score: 99,
          description: 'yyyy yyyy'
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
        },
        {
          id: 9,
          name: '钢铁侠',
          score: 95,
        },
        {
          id: 10,
          name: '蜘蛛侠',
          score: 86,
        },
        {
          id: 11,
          name: '灭霸',
          score: 54,
        },
        {
          id: 12,
          name: '张三',
          score: 92,
        },
        {
          id: 13,
          name: '王五',
          score: 84,
        },
        {
          id: 14,
          name: '李四',
          score: 93,
        },
        {
          id: 15,
          name: '超人',
          score: 48,
        },
        {
          id: 16,
          name: '蝙蝠侠',
          score: 76,
        },
        {
          id: 17,
          name: '超杀女',
          score: 84,
        },
        {
          id: 18,
          name: '贝恩',
          score: 93,
        },
        {
          id: 19,
          name: '海王',
          score: 48,
        },
        {
          id: 20,
          name: '闪电侠',
          score: 76,
        }
      ]
    };
  },
  methods: {
    edit(item) {
      alert(`开始编辑${item.id}`)
    },
    view(item) {
      alert(`开始查看${item.id}`)
    },
    x() {
      // ajax(url, orderBy) // /api/users?score='desc'
      // .then((response) => {
      //   this.dataSource = response.data
      // })
      // console.log('x')
      this.loading = true;
      setTimeout(() => {
        this.dataSource = this.dataSource.sort((a, b) => a.score - b.score)
        this.loading = false
      }, 3000);
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

<style lang="scss">
  .xxx {
    height: 400px;
    overflow: auto;
  }
</style>