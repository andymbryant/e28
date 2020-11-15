<template>
  <Masthead/>
  <RecipeFilter/>
  <RecipeList v-if='!loading'/>
</template>

<script>
import Masthead from '@/components/Masthead.vue';
import RecipeFilter from '@/components/RecipeFilter.vue';
import RecipeList from '@/components/RecipeList.vue';

export default {
  name: 'Home',
  components: {
    Masthead,
    RecipeFilter,
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
