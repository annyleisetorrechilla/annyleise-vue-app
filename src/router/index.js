import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import Admissions from '@/pages/Admissions.vue'
import Activity from '@/views/Activity.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },

    {
      path: '/admissions',
      name: 'Admissions',
      component: Admissions,
    },

    {
      path: '/activity',
      name: 'Activity',
      component: Activity,
    },
  ],

  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

export default router
