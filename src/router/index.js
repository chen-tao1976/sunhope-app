import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/404.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },  
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const dynamicRoute = [
  {
    path: '/task',
    name: 'task',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/TaskView.vue')
  },
  {
    path: '/system',
    name: 'system',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/SystemView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

//动态路由组合


export default router