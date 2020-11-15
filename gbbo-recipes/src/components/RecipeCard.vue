<template>
  <div class='card' @click='navToItemDetail'>
    <img class='card-img' :src="recipeData.src" :alt="recipeData.name">
    <div class="card-content">
      <h3>{{recipeData.name}}</h3>
      <p>{{recipeData.description}}</p>
      <p v-if="!mini">{{recipeData.directions}}</p>
      <p v-if="!mini">{{recipeData.ingredients}}</p>
      <div class="card-icons">
        <font-awesome-icon icon="heart" class='test'/>
        <font-awesome-icon icon="shopping-cart" class='test'/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeCard',
  props: {
    recipeData: {
      type: Object,
      required: true,
    },
    mini: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    navToItemDetail() {
      this.$router.push({ name: 'RecipeDetail', params: { id: this.recipeData.id } });
    },
  },
};
</script>

<style>
  .card {
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    text-align: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative
  }
  .card-icons {
    display: flex;
    width: 50px;
    justify-content: space-between;
  }
  .card-content {
    padding: 0 1rem 1rem 1rem;
  }
</style>

<style scoped>
  .card-img {
    width: 100%;
  }
  .card:hover {
    box-shadow: 0 8px 8px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
  }
</style>
