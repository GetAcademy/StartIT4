import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import NewAccount from '@/components/NewAccount'
import Swipe from '@/components/Swipe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '@/components/NewAccount',
      name: 'NewAccount',
      component: NewAccount
    },
    {
      path: '@/components/Swipe',
      name: 'Swipe',
      component: Swipe
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
  ]
})
