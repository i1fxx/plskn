import App from './App.vue';
import components from '@/components/UI';
import router from '@/router/router';
import VueSocialSharing from 'vue-social-sharing';
import { createApp } from 'vue';
import { Row, Column, Hidden } from 'vue-grid-responsive';
import './registerServiceWorker';
import './main.css';

let app = createApp(App);
app.config.globalProperties.$siteName = 'Пляскин';
app.config.globalProperties.$adminEmail = 'anton.burskii@gmail.com';
app.config.globalProperties.$siteHost = 'https://plskn.ru';

app.component('ui-row', Row);
app.component('ui-column', Column);
app.component('ui-hidden', Hidden);
components.forEach((component) => {
	app.component(component.name, component);
});
app.use(router).use(VueSocialSharing).mount('#app');
