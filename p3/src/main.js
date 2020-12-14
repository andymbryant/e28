import { createApp, reactive } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router';
import APIService from './api';
import 'normalize.css';
import './css/variables.css';
import App from './App.vue';
import store from './store';

const app = createApp(App).use(store);

// Initialize API for use throughout the application
const api = new APIService();
app.config.globalProperties.$api = reactive(api);

// Register font-awesome icons and component
library.add(faHeart);
library.add(faShoppingCart);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router).mount('#app');
