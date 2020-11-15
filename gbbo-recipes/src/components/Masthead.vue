<template>
  <div class='title-ctr'>
    <h1>Great British Bake-off Recipes</h1>
    <p>The Unofficial Online Recipe Book for your Favorite Show!</p>
  </div>
  <NavBar/>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'MastHead',
  components: {
    NavBar,
  },
};
</script>

<style scoped>
  .title-ctr {
    text-align: center;
    border: dashed 5px pink;
    margin-top: 2rem;
    padding: 1rem 2rem;
  }
</style>
