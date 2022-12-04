import App from './App.vue';
import components from '@/components/UI';
import router from '@/router/router';
import VueSocialSharing from 'vue-social-sharing';
import { createApp } from 'vue';
import { Row, Column, Hidden } from 'vue-grid-responsive';
import './registerServiceWorker';
import './main.css';
let app = createApp(App);
let siteName = 'Пляскин';
app.config.globalProperties.$siteName = siteName;
app.config.globalProperties.$adminEmail = 'admin@plskn.ru';
app.config.globalProperties.$siteHost = 'https://plskn.ru';

app.component('ui-row', Row);
app.component('ui-column', Column);
app.component('ui-hidden', Hidden);
components.forEach((component) => {
	app.component(component.name, component);
});
router.beforeEach((to, from, next) => {
	document.title = `${siteName} - ${to.name as string}`;
	window.scrollTo(0, 0);
	next();
});
app.use(router).use(VueSocialSharing).mount('#app');
