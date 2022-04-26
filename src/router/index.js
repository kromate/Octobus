import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import Alert from '../views/alert.vue'

const routes = [

	{
		path: '/',
		name: 'home',
		component: home,
	
	},
	{
		path: '/landing',
		name: 'landing',
		component: ()=> import('../views/landing.vue'),

	},
	{
		path: '/alert',
		name: 'alert',
		component: Alert,
	},
	{
		path: '/chat',
		name: 'chat',
		component: ()=> import('../views/chat.vue'),
	},
	{
		path: '/add',
		name: 'Add',
		component: ()=> import('../views/addAlert.vue'),

	},
  
	{
		path: '/signup',
		name: 'SignUp',
		component: ()=> import('../views/signUp.vue'),
	
	},
	{
		path: '/login',
		name: 'Login',
		component: ()=> import('../views/login.vue'),
	
	},
  
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
