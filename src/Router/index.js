import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/BaseLayout/Home'

const Routers = [
  {
    path: '',
    component: Home
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/redirect',
    component: Home,
    hidden: true,
    children: [
      {
        path: '/table',
        component: () => import('@/views/table/PanTable')
      }
    ]
  }
]

const router = new Router({
  mode: 'history',
  routes: Routers
})

export default router
