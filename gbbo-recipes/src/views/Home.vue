<template>
  <h3>Here is a list of our recipes. Click for more information. Enjoy!</h3>
  <RecipeList v-if='!loading'/>
</template>

<script>
import RecipeList from '@/components/RecipeList.vue';

export default {
  name: 'Home',
  components: {
    RecipeList,
  },
  data() {
    return {
      loading: false,
    };
  },
  created() {
    this.loading = true;
  },
  mounted() {
    this.loading = false;
  },
};
</script>
