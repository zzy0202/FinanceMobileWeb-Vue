import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ArticlePage from "@/views/ArticlePage";
import Stock from "@/views/Stock";
import Fund from "@/views/Fund";

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/article/:id',
		name: 'Article',
		component: ArticlePage
	},
	{
		path: '/stock',
		name: 'Stock',
		component: Stock,
	},
	{
		path:'/fund',
		name:'Fund',
		component: Fund,
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
