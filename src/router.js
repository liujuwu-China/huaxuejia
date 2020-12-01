import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'index',
      component: () => import('./views/index.vue'),
    },
    {
      path: '/first',
      component: () => import('./components/first/First.vue')
    }
  ]
})
