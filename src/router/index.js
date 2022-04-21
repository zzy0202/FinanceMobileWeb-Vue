import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ArticlePage from "@/views/ArticlePage";
import Stock from "@/views/Stock";
import Fund from "@/views/Fund";
import Me from "@/views/Me";
import Login from "@/views/Login";

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
		props: route => ({ article: route.params }),
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
	},
	{
		path: '/me',
		name: 'Me',
		component: Me,
	},
	{
		path: '/login',
		name:'Login',
		component: Login,
	}
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router
