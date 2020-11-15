<template>
  <div class='card' @click='navToItemDetail'>
    <img class='card-img' :src="recipeData.src" :alt="recipeData.name">
    <div class="card-content">
      <h3>{{recipeData.name}}</h3>
      <p>{{recipeData.description}}</p>
      <div v-if='!mini' class='card-section'>
        <div class="ingredients-ctr">
          <h4>Ingredients</h4>
          <ul>
            <li v-for='i in ingredients' :key='i'>{{i}}</li>
          </ul>
        </div>
        <div class="directions-ctr">
          <h4>Directions</h4>
          {{recipeData.directions}}
        </div>
      </div>
    </div>
    <div class="card-icons">
      <font-awesome-icon icon="heart" class='test'/>
      <font-awesome-icon icon="shopping-cart" class='test'/>
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
  computed: {
    ingredients() {
      return this.recipeData.ingredients.split(',');
    },
  },
  methods: {
    navToItemDetail() {
      this.$router.push({ name: 'RecipeDetail', params: { id: this.recipeData.id } });
    },
  },
};
</script>

<style scoped>
  .card {
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    text-align: center;
    cursor: pointer;
    position: relative;
  }
  .card-section {
    display: flex;
    text-align: left;
  }
  .directions-ctr {
    width: 500px;
  }
  .card-content {
    padding: 0 1rem 1rem 1rem;
    position: relative;
  }
  .card-icons {
    position: absolute;
    display: flex;
    width: 50px;
    bottom: 0.5rem;
    right: 0.5rem;
    justify-content: space-between;
  }
  .card-section-header {
    margin-bottom: 0;
  }
  .card-img {
    width: 100%;
  }
  .card:hover {
    box-shadow: 0 8px 8px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
  }
</style>
