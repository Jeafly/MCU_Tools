import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ToolView from '@/components/ToolView'
import TestView from '@/components/TestView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Tool',
    name: 'ToolView',
    component: ToolView
  },
  {
    path: '/Test',
    name: 'TestView',
    component: TestView
  }
]

const router = new VueRouter({
  routes
})

export default router
