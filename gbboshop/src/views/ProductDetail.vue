<template>
  <Masthead/>
  <div class='product-detail-ctr' v-if='!loading'>
    <div class="product-card product-detail">
      <img src='https://picsum.photos/200' alt="">
      <div class='details'>
        <h1>{{product.name}}</h1>
        <p>{{product.description}}</p>
        <div class='details-footer'>
          <div>Price: {{product.price}}</div>
          <font-awesome-icon icon="heart" class='test'/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Masthead from '@/components/Masthead.vue';

export default {
  name: 'ProductDetail',
  components: {
    Masthead,
  },
  props: {
    id: String,
  },
  data() {
    return {
      loading: false,
      product: {},
    };
  },
  created() {
    this.loading = true;
  },
  mounted() {
    this.$api.getProduct(this.id)
      .then((res) => this.product = res)
      .then(() => this.$nextTick(() => this.loading = false));
  },
};
</script>

<style scoped>
  .product-detail {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    width: 700px;
  }
  .details {
    width: 400px;
    text-align: left;
  }
  .details-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .test {
    transition: color 0.1s;
  }
  .test:hover {
    color: yellow;
  }
</style>
