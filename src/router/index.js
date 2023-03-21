import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Cuerpo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/upcoming-events',
      name: 'upcoming-events',
      component: () => import('../views/CuerpoUp.vue')
    },
    {
      path: '/past-events',
      name: 'past-events',
      component: () => import('../views/CuerpoPast.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/stats',
      name: 'stats',
      component: () => import('../views/Stats.vue')
    },
    {
    path: '/details',
    name: 'details',
    component: () => import('../views/Details.vue')
  },
  ]
})

export default router
