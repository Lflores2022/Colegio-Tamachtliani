import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProgramView from '../views/ProgramView.vue'
import FacilitiesView from '../views/FacilitiesView.vue'
import FormView from '../views/FormView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/programas',
      name: 'programas',
      component: ProgramView
    },
    {
      path: '/instalaciones',
      name: 'instalaciones',
      component: FacilitiesView
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: FormView
    }

  ]
})

export default router
