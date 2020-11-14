<template>
  <div class="product-list-ctr" v-if='!loading'>
    <div class="products">
      <Product
        v-for='p in filteredProducts'
        :key='p.sku'
        :name='p.name'
        :description='p.description'
        :src='p.src'
      />
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product.vue';

export default {
  name: 'ProductList',
  components: {
    Product,
  },
  data() {
    return {
      loading: false,
      products: null,
    };
  },
  methods: {
    async getProducts() {
      return this.$api.getProducts();
    },
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
    this.getProducts()
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
