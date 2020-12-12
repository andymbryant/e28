import { createApp, reactive } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createStore } from 'vuex';
import router from './router';
import APIService from './api';
import 'normalize.css';
import './css/variables.css';
import App from './App.vue';

// Initialize API for use throughout the application
const api = new APIService();
const app = createApp(App);
app.config.globalProperties.$api = reactive(api);

const store = createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    authUser(context) {
      api.axios.post('auth').then((response) => {
        if (response.data.authenticated) {
          context.commit('setUser', response.data.user);
        }
      });
    },
  },
  modules: {
  },
});

app.use(store);

// Register font-awesome icons and component
library.add(faHeart);
library.add(faShoppingCart);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router).mount('#app');
