<template>
  <div class='page-description'><p>Here is a list of our recipes. Click on any of the cards below for more information. Or you can filter them by category on the left. Enjoy!</p></div>
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
