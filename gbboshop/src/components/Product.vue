<template>
  <div class='product-ctr'>
    <img :src="srcLocal" alt="">
    <h3>{{name}}</h3>
    <p>{{description}}</p>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    src: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
  computed: {
    srcLocal() {
      return 'https://picsum.photos/200';
    },
  },
};
</script>

<style scoped>
  .product-ctr {
    border: 1px solid black;
    text-align: center;
  }
</style>
