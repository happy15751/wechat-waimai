import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'vant/lib/index.less';
import { Lazyload } from 'vant';
import { Grid, GridItem } from 'vant';
import { Tab, Tabs } from 'vant';
import { IndexBar, IndexAnchor } from 'vant';
import { SwipeCell } from 'vant';
import { Col, Row } from 'vant';
import { Search } from 'vant';
import { ContactCard } from 'vant';
import weui from 'weui.js';
import 'weui';

import 'font-awesome/css/font-awesome.min.css';
// import weui from 'jquery-weui/dist/js/jquery-weui.min'
// import picker from 'jquery-weui/dist/js/city-picker.min'

Vue.prototype.$weui =weui;
Vue.use(ContactCard);
Vue.use(Search);

Vue.use(Col);
Vue.use(Row);

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(SwipeCell);
Vue.use(IndexBar);
Vue.use(IndexAnchor)
Vue.use(Tab);
Vue.use(Tabs);

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Vant)
Vue.use(Lazyload);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
