<template>
  <Masthead/>
  <RecipeList v-if='!loading'/>
</template>

<script>
import Masthead from '@/components/Masthead.vue';
import RecipeList from '@/components/RecipeList.vue';

export default {
  name: 'Home',
  components: {
    Masthead,
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
