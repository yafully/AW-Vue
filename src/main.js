// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//  import fastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import ElementUI from 'element-ui'
import Vue2TouchEvents from 'vue2-touch-events'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import '@css/common.css'
import '@css/styles.css'

Vue.use(ElementUI, { locale })
Vue.use(Vue2TouchEvents)
Vue.config.productionTip = false
//  fastClick.attach(document.body)
Vue.use(VueLazyLoad, {
	loading: '@img/loading/spin.svg'

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
