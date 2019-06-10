import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Swipe from '@/components/Swipe'
import NewAccount from '@/components/NewAccount'
import Messages from '@/components/Messages'
import Settings from '@/components/Settings'
import Dates from '@/components/Dates'
import Options from '@/components/Options'
import Profile from '@/components/Profile'
import YourDates from '@/components/YourDates'

Vue.use(Router)

export default new Router({

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
    {
      path: '/Messages',
      name: 'Messages',
      component: Messages,
      props: true
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/Dates',
      name: 'Dates',
      component: Dates
    },
    {
      path: '/Options',
      name: 'Options',
      component: Options
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/YourDates',
      name: 'YourDates',
      component: YourDates
    },
  ]
})
