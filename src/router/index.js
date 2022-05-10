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
		path: '/signup',
		name: 'SignUp',
		component: ()=> import('../views/signUp.vue'),
	
	},
	{
		path: '/login',
		name: 'Login',
		component: ()=> import('../views/login.vue'),
	
	},
	{
		path: '/driver',
		name: 'Driver',
		component: ()=> import('../views/driver.vue'),
	},
	{
		path: '/profile',
		name: 'Profile',
		component: ()=> import('../views/profile.vue'),
	},
	{
		path: '/driverInfo',
		name: 'DriverInfo',
		component: ()=> import('../views/driverinfo.vue'),
	},
	{
		path: '/routes',
		name: 'Routes',
		component: ()=> import('../views/routes.vue'),
	},
  
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
