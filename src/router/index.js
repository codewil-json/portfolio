import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/links',
    name: 'Links',
    component: () => import('../views/MyLinks.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to) => {
  if (window.gtag) {
    window.gtag('config', 'G-PE6XKDX06W', {
      page_path: to.fullPath
    })
  }
})

export default router
