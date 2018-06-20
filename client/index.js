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

router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  // if (to.fullPath === '/app') {
  //   next('/login')
  // } else {
  //   next()
  // }
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('beforeResolve')
  next()
})

router.afterEach((to, from) => {
  console.log('afterEach')
})
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#root')
