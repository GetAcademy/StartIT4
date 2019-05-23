import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Superstar from '@/components/Superstar'
import WheelOfFortune from '@/components/WheelOfFortune'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Superstar',
      name: 'Superstar',
      component: Superstar,
      props: true,
    },
    {
      path: '/WheelOfFortune',
      name: 'Wheel Of Fortune',
      component: WheelOfFortune,
      props: true,
    },
  ]
})
