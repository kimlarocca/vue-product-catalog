import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// GLOBAL VARIABLES

// main demo api feed
Vue.prototype.api = 'http://manage.hawksearch.com/sites/demo/?hawkoutput=json'

// set the default number of refinements that will be visible
// if there are more, a 'show more' link will appear
// this value may be overridden by hawksearch
Vue.prototype.numberOfRefinementsVisible = 5

// set the default sorting for the hits component
Vue.prototype.defaultSortBy = 'titleasc'

// set the default layout for the hits component
// can be set to 'grid' or 'list'
Vue.prototype.defaultLayout = 'grid'

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
