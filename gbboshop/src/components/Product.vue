<template>
  <div class='product-ctr'>
    <img :src="src" alt="">
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
};
</script>

<style scoped>
  .product-ctr {
    border: 1px solid black;
    width: 250px;
  }
</style>
