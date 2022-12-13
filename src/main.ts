import App from './App.vue';
import components from '@/components/UI';
import router from '@/router/router';
import VueSocialSharing from 'vue-social-sharing';
import VueGtag from 'vue-gtag';
import { createApp } from 'vue';
import './registerServiceWorker';
import './main.css';
let app = createApp(App);
app.config.globalProperties.$siteName = 'Пляскин';
app.config.globalProperties.$adminEmail = 'admin@plskn.ru';
app.config.globalProperties.$siteHost = 'https://plskn.ru';

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
