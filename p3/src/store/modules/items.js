/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable radix */

function getDefaultState() {
  return {
    recipes: [],
    favorites: [],
    cart: [],
  };
}

const state = getDefaultState();

const getters = {
  recipes: (state) => state.recipes,
  recipeCategories: (state) => {
    const allCategories = [];
    state.recipes.forEach((r) => {
      const categories = r.categories.split(',');
      allCategories.push(categories);
    });
    return Array.from(new Set(allCategories.flat()));
  },
  cart: (state) => state.cart,
  favoriteRecipeIDs: (state) => [...new Set(state.favorites.map((f) => parseInt(f.recipe_id)))],
  cartRecipeIDs: (state) => [...new Set(state.cart.map((c) => parseInt(c.recipe_id)))],
};

const actions = {
  async initData({ dispatch }) {
    await dispatch('fetchRecipes');
    if (this.$api.isAuthenticated()) {
      await dispatch('fetchFavorites');
      await dispatch('fetchCart');
    }
  },
  async fetchRecipes({ commit }) {
    const recipes = await this.$api.recipe.getList();
    commit('setRecipes', recipes);
  },
  async fetchFavorites({ commit }) {
    const favorites = await this.$api.favorite.getList();
    commit('setFavorites', favorites);
  },
  async fetchCart({ commit }) {
    const cart = await this.$api.cart.getList();
    commit('setCart', cart);
  },
  async updateFavorites({ dispatch }, { recipeData, type }) {
    if (type === 'add') {
      await this.$api.favorite.create(recipeData.id).catch((error) => console.error(error));
    } else {
      const allFavorites = await this.$api.favorite.getList();
      const favoriteToDelete = allFavorites.find((f) => parseInt(f.recipe_id) === parseInt(recipeData.id)).id;
      await this.$api.favorite.delete(favoriteToDelete).catch((error) => console.error(error));
    }
    dispatch('fetchFavorites');
  },
  async updateCart({ dispatch }, { recipeData, type }) {
    if (type === 'add') {
      await this.$api.cart.create(recipeData.id).catch((error) => console.error(error));
    } else {
      const allCarts = await this.$api.cart.getList();
      const cartToDelete = allCarts.find((c) => parseInt(c.recipe_id) === parseInt(recipeData.id)).id;
      await this.$api.cart.delete(cartToDelete).catch((error) => console.error(error));
    }
    dispatch('fetchCart');
  },
};

const mutations = {
  setRecipes(state, payload) {
    state.recipes = payload;
  },
  setFavorites(state, payload) {
    state.favorites = payload;
  },
  setCart(state, payload) {
    state.cart = payload;
  },
  addRecipe(state, payload) {
    state.recipes.push(payload);
  },
  removeRecipe(state, payload) {
    state.recipes = state.recipes.filter((r) => r !== payload);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
