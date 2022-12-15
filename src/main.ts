import App from './App.vue';
import components from '@/components/UI';
import router from '@/router/router';
import VueSocialSharing from 'vue-social-sharing';
import VueGtag from 'vue-gtag';
import poems from '@/data/poems.json';
import { createApp } from 'vue';
import './registerServiceWorker';
import './main.css';
let app = createApp(App);
let sortPoems = (poemsList) => {
	poemsList = poemsList.filter(
		(item) => new Date(item.add_date).getTime() < new Date().getTime()
	);
	return poemsList.sort((a, b) => {
		return new Date(b.add_date).getTime() - new Date(a.add_date).getTime();
	});
};
app.config.globalProperties.$siteName = 'Пляскин';
app.config.globalProperties.$adminEmail = 'admin@plskn.ru';
app.config.globalProperties.$siteHost = 'https://plskn.ru';
app.config.globalProperties.$poemsList = sortPoems(poems);

components.forEach((component) => {
	app.component(component.name, component);
});

app
	.use(router)
	.use(VueSocialSharing)
	.use(VueGtag, {
		config: { id: 'G-YB2T65HZRK' },
	})
	.mount('#app');
