import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Reg from '@/components/Reg/Reg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/reg',
      name: 'Reg',
      component:Reg
    }
  ]
})
