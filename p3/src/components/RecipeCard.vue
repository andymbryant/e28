<template>
    <div
      v-if='!loading'
      class='card'
      :class="{'card-disabled': disabled}"
      :disabled='disabled'
    >
    <img class='card-img' :src="recipeData.src" :alt="recipeData.name" @click='navToItemDetail'>
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
      <button v-if='isRecipeInFavorites()' :disabled='!$api.isAuthenticated()' @click.prevent='updateFavorites("remove")'>
        <font-awesome-icon color='pink' icon="heart"/>
      </button>
      <button v-else :disabled='!$api.isAuthenticated()' @click.prevent='updateFavorites("add")'>
        <font-awesome-icon color='grey' icon="heart"/>
      </button>
      <button v-if='isRecipeInCart()' :disabled='!$api.isAuthenticated()' @click.prevent='updateCart("remove")'>
        <font-awesome-icon color='#00c096' icon="shopping-cart"/>
      </button>
      <button v-else :disabled='!$api.isAuthenticated()' @click.prevent='updateCart("add")'>
        <font-awesome-icon color='grey' icon="shopping-cart"/>
      </button>
    </div>
  </div>
</template>

<script>
/* eslint-disable radix */
import { mapGetters } from 'vuex';

export default {
  name: 'RecipeCard',
  data() {
    return {
      loading: false,
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
    updateFavorites(type) {
      const payload = {
        recipeData: this.recipeData,
        type,
      };
      this.$store.dispatch('updateFavorites', payload);
    },
    updateCart(type) {
      const payload = {
        recipeData: this.recipeData,
        type,
      };
      this.$store.dispatch('updateCart', payload);
    },
    navToItemDetail() {
      this.$router.push({ name: 'RecipeDetail', params: { id: this.recipeData.id } });
    },
    isRecipeInFavorites() {
      return this.favoriteRecipeIDs.includes(this.recipeData.id);
    },
    isRecipeInCart() {
      return this.cartRecipeIDs.includes(this.recipeData.id);
    },
    getFavoriteColor() {
      // If recipe is in list of favorites, return active color
      const flag = this.isRecipeInFavorites();
      return flag ? 'pink' : 'grey';
    },
    getCartColor() {
      // If recipe is in list of favorites, return active color
      const flag = this.isRecipeInCart();
      return flag ? '#00c096' : 'grey';
    },
  },
  computed: {
    ...mapGetters(['favoriteRecipeIDs', 'cartRecipeIDs']),
    ingredients() {
      return this.recipeData.ingredients.split(',');
    },
  },
  created() {
    this.loading = true;
  },
  mounted() {
    this.$nextTick(() => this.loading = false);
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
    width: 75px;
    bottom: 0.5rem;
    right: 0.5rem;
    justify-content: space-between;
  }
  .card-section-header {
    margin-bottom: 0;
  }
  .card-img {
    width: 100%;
    cursor: pointer;
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
