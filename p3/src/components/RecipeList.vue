<template>
  <div class='recipe-list-ctr' v-if='!loading'>
    <div class="categories-ctr">
      <h4 class='section-header'>Categories</h4>
      <span v-for='c in recipeCategories' :key='c'>
        <input
          type="checkbox"
          class='category-checkbox'
          :id="c"
          :value="c"
          v-model="selectedCategories"
        >
        <label class='category-label' :for="c">{{c}}</label>
      </span>
    </div>
    <div v-if='filteredRecipes.length' class="recipes-ctr">
      <RecipeCard
        v-for='r in filteredRecipes'
        :key='r.sku'
        :recipeData='r'
        :mini='true'
      />
    </div>
    <div class='empty-recipes-ctr' v-else>
      <h3>No recipes match that query! Please adjust filter settings.</h3>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-underscore-dangle */
import { mapGetters, mapActions } from 'vuex';
import RecipeCard from '@/components/RecipeCard.vue';

export default {
  name: 'RecipeList',
  components: {
    RecipeCard,
  },
  data() {
    return {
      loading: false,
      selectedCategories: ['savory', 'bread', 'dessert', 'pastry', 'breakfast', 'cake'],
    };
  },
  methods: {
    ...mapActions(['updateRecipes', 'updateCart']),
    getRecipeCategories() {
      const allCategories = [];
      console.log(this.recipes);
      this.recipes.forEach((r) => {
        const categories = r.categories.split(',');
        allCategories.push(categories);
      });
      return Array.from(new Set(allCategories.flat()));
    },
  },
  computed: {
    ...mapGetters(['recipes', 'cart', 'recipeCategories']),
    filteredRecipes() {
      const recipes = this.recipes.filter((r) => {
        const categories = r.categories.split(',');
        return categories.some((c) => this.selectedCategories.includes(c));
      });
      return recipes;
    },
  },
  created() {
    this.loading = true;
  },
  mounted() {
    this.loading = false;
  },
};
</script>

<style scoped>
  .recipe-list-ctr {
    display: flex;
  }
  .categories-ctr {
    padding: 10px;
    display: flex;
    flex-direction: column;
    padding-top: 0;
  }

  .category-label {
    margin-left: 0.5rem;
  }
  .section-header {
    margin-top: 0;
  }
  .recipes-ctr {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    width: 800px;
    margin-bottom: 2rem;
  }
  .empty-recipes-ctr {
    width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
