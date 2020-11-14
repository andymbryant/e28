import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import APIService from './api';
import 'normalize.css';

const api = new APIService();
const app = createApp(App);
app.config.globalProperties.$api = api;

app.use(router).mount('#app');
