<template>
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
