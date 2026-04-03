import { createRouter, createWebHistory } from 'vue-router'
import ContractsView from '../views/ContractsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/contracts',
    },
    {
      path: '/contracts',
      name: 'contracts',
      component: ContractsView,
    },
    {
      path: '/contracts/:id',
      name: 'contract-detail',
      component: () => import('../views/ContractDetailView.vue'),
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('../views/UploadView.vue'),
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import('../views/ReportsView.vue'),
    },
  ],
})

export default router
