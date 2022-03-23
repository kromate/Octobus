import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../views/landing.vue'


const routes = [

  {
    path: '/',
    name: 'landing',
    component: Landing,
	meta:{
		layout:'landing'
	}
  },
  {
    path: '/alert',
    name: 'alert',
    component: Alert,
	meta:{
		layout:'landing'
	}
  },
  {
    path: '/add',
    name: 'Add',
    component: ()=> import('../views/addAlert.vue'),
	meta:{
		layout:'add'
	}
  },
  
  {
    path: '/signup',
    name: 'SignUp',
    component: ()=> import('../views/signUp.vue'),
    meta:{
      layout:'auth'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=> import('../views/login.vue'),
    meta:{
      layout:'auth'
    }
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
