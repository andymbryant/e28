<template>
  <Masthead/>
  <router-view v-if='!loading'/>
</template>

<script>
import Masthead from '@/components/Masthead.vue';

export default {
  name: 'Home',
  components: {
    Masthead,
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

<style>
  html {
    width: 100%;
    height: 100%;
  }
  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;
  }
  .page-description {
    margin: 0 auto;
    text-align: center;
    width: 600px;
  }
</style>
