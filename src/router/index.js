import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'List',
		component: () => import('../views/List.vue')
	},
	{
		path: '/add',
		name: 'Add',
		component: () => import('../views/Add.vue')
	},
	{
		path: '/view',
		name: 'View',
		component: () => import('../views/View.vue')
	},
	{
		path: '/update',
		name: 'Update',
		component: () => import('../views/Update.vue')
	}

]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
