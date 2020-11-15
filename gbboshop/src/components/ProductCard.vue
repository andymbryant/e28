<template>
  <div class='product-card' @click='navToItemDetail'>
    <img :src="srcLocal" alt="">
    <h3>{{productData.name}}</h3>
    <p>Price: {{productData.price}}</p>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    productData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    srcLocal() {
      return 'https://picsum.photos/200';
    },
  },
  methods: {
    navToItemDetail() {
      this.$router.push({ name: 'ProductDetail', params: { id: this.productData.id } });
    },
  },
};
</script>

<style>
  .product-card {
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    text-align: center;
    cursor: pointer;
    padding: 0 1rem;
  }
</style>

<style scoped>
  .product-card:hover {
    box-shadow: 0 8px 8px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
  }
</style>
