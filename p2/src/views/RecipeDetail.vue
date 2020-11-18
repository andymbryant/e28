<template>
  <div class='detail-ctr'>
    <RecipeCard
      v-if='!loading'
      :recipeData='recipe'
      :mini='false'
      :disabled='true'
      />
  </div>
</template>

<script>
import RecipeCard from '@/components/RecipeCard.vue';

export default {
  name: 'recipeDetail',
  components: {
    RecipeCard,
  },
  props: {
    id: String,
  },
  data() {
    return {
      loading: false,
      recipe: {},
    };
  },
  created() {
    this.loading = true;
  },
  mounted() {
    this.$api.getRecipe(this.id)
      .then((res) => this.recipe = res)
      .then(() => this.$nextTick(() => this.loading = false));
  },
};
</script>

<style scoped>
  .detail-ctr {
    width: 700px;
  }
</style>
