// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import vContent from './components/Reg/Content'

//轮播
import vBanner from './components/common/Banner'
//获取数据
import axios from 'axios' 
//mint-ui
import { Swipe, SwipeItem } from 'mint-ui'
import { Field } from 'mint-ui';
import { Button } from 'mint-ui';



Vue.component(Button.name, Button);
Vue.component(Field.name, Field);
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.prototype.$http = axios

Vue.component("v-banner",vBanner)

Vue.component("v-content",vContent)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
