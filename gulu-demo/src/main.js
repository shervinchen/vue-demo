import Vue from "vue";
import Demo from "./demo.vue";
import DemoPopover from "./demo-popover.vue";
import DemoCascader from './demo-cascader.vue'
import DemoTable from './demo-table.vue'

import DemoBar from './demos/demo-bar'

import Button from "./button/button";
import Icon from "./icon";
import ButtonGroup from "./button/button-group";
import Input from "./input";
import Row from "./grid/row";
import Col from "./grid/col";
import Layout from "./layout/layout";
import Header from "./layout/header";
import Sider from "./layout/sider";
import Content from "./layout/content";
import Footer from "./layout/footer";
import Toast from "./toast";
import plugin from "./plugin";
import Tabs from "./tabs/tabs";
import TabsHead from "./tabs/tabs-head";
import TabsBody from "./tabs/tabs-body";
import TabsItem from "./tabs/tabs-item";
import TabsPane from "./tabs/tabs-pane";
import Popover from "./popover";
import Collapse from "./collapse/collapse";
import CollapseItem from "./collapse/collapse-item";
import Cascader from "./cascader/cascader";

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

Vue.config.productionTip = false;

new Vue({
  render: h => h(DemoBar)
}).$mount("#app");
