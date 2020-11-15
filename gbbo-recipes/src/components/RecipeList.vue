<template>
  <div class="recipe-list-ctr" v-if='!loading'>
    <div class="recipes">
      <RecipeCard
        v-for='r in filteredRecipes'
        :key='r.sku'
        :recipeData='r'
        :mini='true'
      />
    </div>
  </div>
</template>

<script>
import RecipeCard from '@/components/RecipeCard.vue';

export default {
  name: 'RecipeList',
  components: {
    RecipeCard,
  },
  data() {
    return {
      loading: false,
      recipes: null,
    };
  },
  computed: {
    filteredRecipes() {
      return this.recipes;
    },
  },
  created() {
    this.loading = true;
  },
  mounted() {
    this.$api.getRecipe()
      .then((res) => this.recipes = res)
      .then(() => this.loading = false);
  },
};
</script>

<style scoped>
  .recipe-list-ctr {
    width: 100%;
    border: 1px black solid;
    margin: 0 1rem;
    padding: 1rem;
  }
  .recipes {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
</style>
