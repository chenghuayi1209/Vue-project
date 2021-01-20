// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//加载vant
import Vant from 'vant';
import 'vant/lib/index.css';
import './rem.js'

//自动设置rem基准值（html标签字体大小）
import 'amfe-flexible'

//引入iconfont
import '../static/icon/iconfont.css'
import { Icon } from 'vant';

Vue.use(Icon);
Vue.config.productionTip = false
Vue.use(Vant);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
