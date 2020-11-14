<template>
  <div class="product-list-ctr" v-if='!loading'>
    <ProductFilter/>
    <Product
      v-for='p in filteredProducts'
      :key='p.sku'
      :name='p.name'
      :description='p.description'
      :src='p.src'
    />
  </div>
</template>

<script>
import ProductFilter from '@/components/ProductFilter.vue';
import Product from '@/components/Product.vue';

export default {
  name: 'ProductList',
  components: {
    ProductFilter,
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
      return [
        {
          name: 'Driscoll’s Strawberries',
          sku: 'driscolls-strawberries',
          description: 'Driscoll’s Strawberries are consistently the best, sweetest, juiciest strawberries available. This size is the best selling, as it is both convenient for completing a cherished family recipes and for preparing a quick snack straight from the fridge.',
          price: 4.99,
          available: 0,
          weight: 1,
          perishable: true,
          categories: 'produce,fruits',
          src: 'https://picsum.photos/250',
        },
        {
          name: 'Nestle Toll House Cookie Dough',
          sku: 'nestle-toll-house-cookie-dough',
          description: 'Get the classic taste that America loves in a ready to bake dough. Full of our famous morsels, these cookies deliver the semi-sweet chocolate flavor youve come to expect from Nestle Toll House.',
          price: 7.49,
          available: 325,
          weight: 2.25,
          perishable: true,
          categories: 'snacks,baking',
          src: 'https://picsum.photos/250',
        },
      ];
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
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
</style>
