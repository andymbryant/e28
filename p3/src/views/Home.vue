<template>
  <div class='page-description'><p>Here is a list of our recipes. Click on any of the cards below for more information. Or you can filter them by category on the left. Enjoy!</p></div>
  <RecipeList v-if='!loading'/>
</template>

<script>
import { mapActions } from 'vuex';
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
  methods: {
    ...mapActions(['initData']),
  },
  mounted() {
    this.initData()
      .then(() => setTimeout(() => {
        this.loading = false;
      }, 600));
  },
};
</script>
