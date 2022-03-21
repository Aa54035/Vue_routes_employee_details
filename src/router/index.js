import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import JobsView from '../views/JobsView.vue'
import JobsDetails from '../views/jobsFolder/JobsDetails.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:  AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component:  JobsView
  },

  // to create parameterised Routes
  {
    path: '/jobs/:id',
    name: 'JobsDetails',
    component:  JobsDetails
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
