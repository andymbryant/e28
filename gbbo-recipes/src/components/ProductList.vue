<template>
  <div class="product-list-ctr" v-if='!loading'>
    <div class="products">
      <ProductCard
        v-for='p in filteredProducts'
        :key='p.sku'
        :productData='p'
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'ProductList',
  components: {
    ProductCard,
  },
  data() {
    return {
      loading: false,
      products: null,
    };
  },
  computed: {
    filteredProducts() {
      return this.products;
    },
  },
  created() {
    this.loading = true;
  },
  mounted() {
    this.$api.getProduct()
      .then((res) => this.products = res)
      .then(() => this.loading = false);
  },
};
</script>

<style scoped>
  .product-list-ctr {
    width: 100%;
    border: 1px black solid;
    margin: 0 1rem;
    padding: 1rem;
  }
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
</style>
