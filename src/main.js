import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
// 使用toast（吐司）插件，用于弹出一个提示
Vue.use(toast)

// 解决移动端300ms的延迟
FastClick.attach(document.body)

// 使用图片懒加载插件。修改img :src -> img v-lazy
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/图片3.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
