import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ArticlePage from "@/views/ArticlePage";
import Stock from "@/views/Stock";

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
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
