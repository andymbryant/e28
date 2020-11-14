<template>
  <div class='title-ctr'>
    <h1>Great British Bake-off Shop</h1>
    <p>The Unofficial Online Store for your Favorite Show!</p>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
  .title-ctr {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border: dashed 5px pink;
    margin-top: 2rem;
    padding: 1rem 2rem;
  }
</style>
