// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 根组件
import App from './App'
// 路由
import router from './router'


// 导入 store对象
import store from './store/index.js'

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)


// 导入bootstrap
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// 导入图片精灵
import '../src/assets/libs/font-awesome/css/font-awesome.css'

// 导入layer
// import './assets/libs/layer/layer.js'

// vue-resource
// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 指定存储对象
  store,
  router,
  template: '<App/>',
  components: { App }
})
