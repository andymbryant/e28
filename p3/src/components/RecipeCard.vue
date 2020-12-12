<template>
  <div
    v-if='!loading'
    class='card'
    :class="{'card-disabled': disabled}"
    :disabled='disabled'
    @click='navToItemDetail'
  >
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
      <font-awesome-icon :color='favoriteColor' icon="heart" class='test'/>
      <font-awesome-icon :color='cartColor' icon="shopping-cart" class='test'/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeCard',
  data() {
    return {
      loading: false,
      inFavorites: false,
      inCart: false,
    };
  },
  props: {
    recipeData: {
      type: Object,
      required: true,
    },
    // Determines if card should be minified (usually for display on Home page)
    mini: {
      type: Boolean,
      required: false,
      default: false,
    },
    // Determines if card should be clickable
    disabled: {
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
  computed: {
    ingredients() {
      return this.recipeData.ingredients.split(',');
    },
    isRecipeInFavorites() {
      // TODO: get list of favorite IDs from api, rather than hard-coding them here
      return [2, 3, 6].includes(this.recipeData.id);
    },
    isRecipeInCart() {
      // TODO: get list of cart IDs from api, rather than hard-coding them here
      return [2, 4, 7].includes(this.recipeData.id);
    },
    favoriteColor() {
      // If recipe is in list of favorites, return active color
      return this.isRecipeInFavorites ? 'pink' : 'grey';
    },
    cartColor() {
      // If recipe is in list of cart items, return active color
      return this.isRecipeInCart ? '#00c096' : 'grey';
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
  .card {
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    text-align: center;
    position: relative;
    cursor: pointer;
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
  .card-disabled {
    cursor: inherit;
  }
  .card-disabled:hover {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }
</style>
