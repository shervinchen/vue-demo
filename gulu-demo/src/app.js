import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";
import Input from "./input";
import Row from "./row";
import Col from "./col";
import Layout from "./layout";
import Header from "./header";
import Sider from "./sider";
import Content from "./content";
import Footer from "./footer";
import Toast from "./toast";
import plugin from "./plugin";
import Tabs from "./tabs";
import TabsHead from "./tabs-head";
import TabsBody from "./tabs-body";
import TabsItem from "./tabs-item";
import TabsPane from "./tabs-pane";
import Popover from "./popover";
import Collapse from "./collapse";
import CollapseItem from "./collapse-item";
import Cascader from "./cascader";

Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", ButtonGroup);
Vue.component("g-input", Input);
Vue.component("g-row", Row);
Vue.component("g-col", Col);
Vue.component("g-layout", Layout);
Vue.component("g-header", Header);
Vue.component("g-sider", Sider);
Vue.component("g-content", Content);
Vue.component("g-footer", Footer);
Vue.component("g-toast", Toast);
Vue.component("g-tabs", Tabs);
Vue.component("g-tabs-head", TabsHead);
Vue.component("g-tabs-body", TabsBody);
Vue.component("g-tabs-item", TabsItem);
Vue.component("g-tabs-pane", TabsPane);
Vue.component("g-popover", Popover);
Vue.component("g-collapse", Collapse);
Vue.component("g-collapse-item", CollapseItem);
Vue.component("g-cascader", Cascader);

Vue.use(plugin);

new Vue({
  el: "#app",
  data: {
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
    ],
    loading1: false,
    loading2: true,
    loading3: false,
    message: "hi",
    selectedTab: ["2", "1"]
  },
  created() {
    //     setTimeout(() => {
    //         let event = new Event('change')
    //         let inputElemnt = this.$el.querySelector('input')
    //         inputElemnt.dispatchEvent(event)
    //     }, 3000)
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    yyy(data) {
      //   console.log(data);
    },
    // inputChange (e) {
    //     console.log(e)
    // }
    showToast1() {
      this.showToast("top");
    },
    showToast2() {
      this.showToast("middle");
    },
    showToast3() {
      this.showToast("bottom");
    },
    showToast(position) {
      this.$toast(
        `${parseInt(Math.random() * 100)}我是<strong>加粗文字</strong>`,
        {
          position,
          enableHtml: false,
          autoClose: 10,
          closeButton: {
            text: "知道了",
            callback(toast) {
              toast.log();
              //   console.log("用户说他知道了");
            }
          }
        }
      );
    }
  }
});

// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)

// const expect = chai.expect

// try {

//     // 单元测试
//     {
//         // 测试按钮含有icon
//         const Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'settings',

//             }
//         })
//         vm.$mount()
//         let useElement = vm.$el.querySelector('use')
//         let href = useElement.getAttribute('xlink:href')
//         expect(href).to.eq('#i-settings')
//         vm.$el.remove()
//         vm.$destroy()
//     }

//     {
//         const Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'settings',
//                 loading: true
//             }
//         })
//         vm.$mount()
//         let useElement = vm.$el.querySelector('use')
//         let href = useElement.getAttribute('xlink:href')
//         expect(href).to.eq('#i-loading')
//         vm.$el.remove()
//         vm.$destroy()
//     }

//     {
//         const div = document.createElement('div')
//         document.body.appendChild(div)
//         const Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'settings',

//             }
//         })
//         vm.$mount(div)
//         let svg = vm.$el.querySelector('svg')
//         let {order} = window.getComputedStyle(svg)
//         expect(order).to.eq('1')
//         vm.$el.remove()
//         vm.$destroy()
//     }

//     {
//         const div = document.createElement('div')
//         document.body.appendChild(div)
//         const Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'settings',
//                 iconPosition: 'right'
//             }
//         })
//         vm.$mount(div)
//         let svg = vm.$el.querySelector('svg')
//         let {order} = window.getComputedStyle(svg)
//         expect(order).to.eq('2')
//         vm.$el.remove()
//         vm.$destroy()
//     }

//     {
//         const Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'settings',
//             }
//         })
//         vm.$mount()
//         let spy = chai.spy(function(){})
//         vm.$on('click', spy)
//         let button = vm.$el
//         button.click()
//         expect(spy).to.have.been.called()
//     }
// } catch (error) {
//     window.errors = [error]
// } finally {
//     window.errors && window.errors.forEach((error) => {
//         console.error(error.message)
//     })
// }
