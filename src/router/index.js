import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import JobsView from '../views/JobsView.vue'
import JobsDetails from '../views/jobsFolder/JobsDetails.vue'
import NotFound from '../views/NotFound.vue'
 

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
    component:  JobsDetails,
    props:true
  },
  //redirect to 
  {
    path: '/any-jobs',
    redirect: '/jobs'
  },
  //catch all 404 routes 
  {
    path: '/:cathAll(.*)',
    name: 'NotFound',
    component: NotFound

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
