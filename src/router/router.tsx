import AboutPage from '@/pages/AboutPage.vue';
import MainPage from '@/pages/MainPage/MainPage.vue';
import PoemPage from '@/pages/PoemPage.vue';
import SinglePoemPage from '@/pages/SinglePoemPage/SinglePoemPage.vue';
import SupportPage from '@/pages/SupportPage/SupportPage.vue';
import NotFound from '@/pages/NotFoundPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
	{
		path: '/',
		name: 'Главная',
		component: MainPage,
	},
	{
		path: '/about',
		name: 'Об авторе',
		component: AboutPage,
	},
	{
		path: '/poem',
		name: 'Список стихотворений',
		component: PoemPage,
	},
	{
		path: '/poem/:id',
		name: 'Страница стихотворения',
		component: SinglePoemPage,
	},
	{
		path: '/support',
		name: 'Поддержка',
		component: SupportPage,
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'Не найдено',
		component: NotFound,
	},
];
const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL),
});
router.beforeEach((to, from, next) => {
	document.title = `Пляскин - ${to.name as string}`;
	window.scrollTo(0, 0);
	next();
});
export default router;
