import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false

/*router.beforeEach((to, from, next)=>{
  console.log("TO", to)
  console.log("FROM", from)
  next()
})

router.afterEach((to, from)=>{
  console.log("TO", to)
  console.log("FROM", from)
})*/

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
