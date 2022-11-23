import AboutPage from '@/pages/AboutPage.vue';
import MainPage from '@/pages/MainPage.vue';
import PoemPage from '@/pages/PoemPage.vue';
import SinglePoemPage from '@/pages/SinglePoemPage.vue';
import SupportPage from '@/pages/SupportPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
	{
		path: '/',
		name: 'Main Page',
		component: MainPage,
	},
	{
		path: '/about',
		name: 'About Page',
		component: AboutPage,
	},
	{
		path: '/poem',
		name: 'Poem Page',
		component: PoemPage,
	},
	{
		path: '/poem/:id',
		name: 'Single Poem Page',
		component: SinglePoemPage,
	},
	{
		path: '/support',
		name: 'Support Page',
		component: SupportPage,
	},
];
const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL),
});

export default router;
