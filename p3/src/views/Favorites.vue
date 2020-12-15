<template>
  <span v-if='!loading'>
    <div v-if='recipes.length'>
      <div class='page-description'><p>These are the recipes that you have favorited. Click on any of the cards below for more info. Yum!</p></div>
      <div class="favorites-ctr">
        <RecipeCard
          v-for='r in recipes'
          :recipeData='r'
          :key='r.id'
        ></RecipeCard>
      </div>
    </div>
    <div v-else >
      <h3>You have not favorites any recipes.</h3>
      <div class='favorites-ctr'></div>
    </div>
  </span>
</template>

<script>
import RecipeCard from '@/components/RecipeCard.vue';
// import { mapGetters } from 'vuex';

export default {
  name: 'Favorites',
  components: {
    RecipeCard,
  },
  data() {
    return {
      loading: false,
      recipes: [],
    };
  },
  // computed: {
  //   ...mapGetters(['recipes']),
  // },
  created() {
    this.loading = true;
  },
  mounted() {
    this.$api.getFavoriteRecipes()
      .then((recipes) => this.recipes = recipes)
      .then(() => this.loading = false);
  },
};
</script>

<style scoped>
  .favorites-ctr {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    width: 800px;
    margin-bottom: 2rem;
  }
</style>
