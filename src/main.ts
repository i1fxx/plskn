import { createApp } from 'vue';
import './registerServiceWorker';
import App from './App.vue';
import components from '@/components/UI';
import router from '@/router/router';

let app = createApp(App);
app.config.globalProperties.$siteName = 'Пляскин';
app.config.globalProperties.$adminEmail = 'anton.burskii@gmail.com';
components.forEach((component) => {
	app.component(component.name, component);
});
app.use(router).mount('#app');
