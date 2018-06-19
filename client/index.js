import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'

import createRouter from './config/router'

import './assets/styles/global.styl'

// import './assets/styles/test.css'
// import './assets/styles/test-stylus.styl'
import './assets/images/bg.jpg'

Vue.use(VueRouter)
const router = createRouter()

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#root')
