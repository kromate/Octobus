import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import Alert from '../components/alerts/alert.vue'

const routes = [

	{
		path: '/',
		name: 'home',
		component: home,
		meta:{
			layout:'landing'
		} 
	},
	{
		path: '/landing',
		name: 'landing',
		component: ()=> import('../views/landing.vue'),
		meta:{
			layout:'default'
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
			layout:'default'
		}
	},
	{
		path: '/login',
		name: 'Login',
		component: ()=> import('../views/login.vue'),
		meta:{
			layout:'default'
		}
	},
  
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
