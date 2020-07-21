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
		path: '/view/:id',
		name: 'View',
		props: true,
		component: () => import('../views/View.vue')
	},
	{
		path: '/update/:id',
		name: 'Update',
		props: true,
		component: () => import('../views/Update.vue')
	},

	{
		path: '*',
		name: 'PageNotFound',
		component: () => import('../views/PageNotFound.vue')
	}

]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
