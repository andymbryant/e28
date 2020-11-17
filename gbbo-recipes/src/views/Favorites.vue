<template>
  <h3>These are the recipes that you have favorited. Yum!</h3>
  <div v-if='!loading' class='favorites-ctr'>
    <RecipeCard v-for='f in favorites' :recipeData='f' :key='f.id'></RecipeCard>
  </div>
</template>

<script>
import RecipeCard from '@/components/RecipeCard.vue';

export default {
  name: 'Favorites',
  components: {
    RecipeCard,
  },
  data() {
    return {
      loading: false,
      favorites: [],
    };
  },
  created() {
    this.loading = true;
  },
  mounted() {
    this.$api.getFavorite()
      .then((res) => Promise.all(res.map((r) => this.$api.getRecipe(r.recipe_id))))
      .then((recipes) => this.favorites = recipes)
      .then(() => this.loading = false)
      .catch((err) => console.error(err));
  },
};
</script>

<style scoped>
  .favorites-ctr {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    width: 700px;
  }
</style>
