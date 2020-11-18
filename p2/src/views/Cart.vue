<template>
  <span v-if='!loading'>
    <div v-if='recipes.length'>
      <div class='page-description'><p>These are all of the ingredients in your cart. The next time you're at the market, pick these up!</p></div>
      <ul v-if='!loading'>
        <li v-for='i in ingredients' :key='i'>{{i}}</li>
      </ul>
    </div>
    <div v-else>There are no items in the cart.</div>
  </span>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      loading: false,
      recipes: [],
    };
  },
  computed: {
    ingredients() {
      return this.recipes.map((r) => r.ingredients.split(',')).flat();
    },
  },
  created() {
    this.loading = true;
  },
  mounted() {
    this.$api.getCart()
      .then((res) => Promise.all(res.map((r) => this.$api.getRecipe(r.recipe_id))))
      .then((recipes) => this.recipes = recipes)
      .then(() => this.loading = false)
      .catch((err) => console.error(err));
  },
};
</script>
