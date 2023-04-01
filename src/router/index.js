import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Cuerpo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index
    },
    {
      path: '/upcoming-events',
      name: 'Upcoming Events',
      component: () => import('../views/CuerpoUp.vue')
    },
    {
      path: '/past-events',
      name: 'Past Events',
      component: () => import('../views/CuerpoPast.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/stats',
      name: 'Stats',
      component: () => import('../views/Stats.vue')
    },
    {
    path: '/details',
    name: 'Details',
    component: () => import('../views/Details.vue')
  },
  ]
})

export default router
