import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// global variables
Vue.prototype.api = 'http://manage.hawksearch.com/sites/demo/?hawkoutput=json'
Vue.prototype.numberOfRefinementsVisible = 5
Vue.prototype.defaultSortBy = 'titleasc'
Vue.prototype.defaultLayout = 'grid'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
