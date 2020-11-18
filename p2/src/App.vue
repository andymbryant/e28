<template>
  <!-- Add Masthead outside of router-view to be visible on every page -->
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
    // Clear user data to ensure that login works correctly
    // TODO: fix login/logout to get/set localstorage properly
    this.$api.clearUser()
      .then(() => this.$api.login())
      // When login is complete, load the router-view of the application
      .then(() => this.loading = false)
      .catch((err) => console.error(err));
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
</style>
