import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Swipe from '@/components/Swipe'
import NewAccount from '@/components/NewAccount'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Swipe',
      name: 'Swipe',
      component: Swipe
    },
    {
      path: '/NewAccount',
      name: 'NewAccount',
      component: NewAccount
    },
  ]
})
