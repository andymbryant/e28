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

const app = createApp(App);

// Initialize API for use throughout the application
const api = new APIService();
app.config.globalProperties.$api = reactive(api);

// Register font-awesome icons and component
library.add(faHeart);
library.add(faShoppingCart);
app.component('font-awesome-icon', FontAwesomeIcon);

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth && !api.isAuthenticated()) {
    // If they’re trying to access a requiresAuth route and they're not logged in, they get sent to "Access Denied" page
    next({ name: 'Forbidden' });
  } else {
    // In all other circumstances, send them to the route they requested
    next();
  }
});

store.$api = api;

app.use(router).use(store).mount('#app');
