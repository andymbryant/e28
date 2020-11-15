<template>
  <!-- <div @click='navToPath' :class='{active: isActive}'>{{name}}</div> -->
  <router-link class='nav-link' :to='path'>{{name}}</router-link>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  methods: {
    navToPath() {
      this.$router.push({ name: this.path });
    },
  },
  computed: {
    isActive() {
      return this.$route.name === this.name;
    },
  },
};
</script>

<style scoped>
  .nav-link {
    color: red;
    font-size: 1.2rem;
    text-decoration: none;
  }
  .router-link-active {
    font-weight: 700;
  }
</style>
