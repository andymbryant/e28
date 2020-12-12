import { createStore } from 'vuex';

export default createStore({
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
      axios.post('auth').then((response) => {
        if (response.data.authenticated) {
          context.commit('setUser', response.data.user);
        }
      });
    },
  },
  modules: {
  },
});
