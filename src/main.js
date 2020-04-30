import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// GLOBAL VARIABLES

// set the default number of refinements that will be visible
// if there are more, a 'show more' link will appear
Vue.prototype.numberOfRefinementsVisible = 5

// set the default sorting for the hits and sort components
Vue.prototype.defaultSortBy = 'titleasc'

// set the default layout for the hits and layout options components
// this can be set to 'grid' or 'list'
Vue.prototype.defaultLayout = 'grid'

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
