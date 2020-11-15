import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import APIService from './api';
import 'normalize.css';
import './css/variables.css';

library.add(faHeart);
library.add(faShoppingCart);

const api = new APIService();
const app = createApp(App);
app.config.globalProperties.$api = api;

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router).mount('#app');
