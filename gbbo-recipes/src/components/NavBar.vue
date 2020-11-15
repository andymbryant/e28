<template>
  <div class="nav-ctr">
    <NavItem v-for='i in items' :key='i.key' :name='i.name' :path='i.path'/>
  </div>
</template>

<script>
import NavItem from '@/components/NavItem.vue';

export default {
  name: 'NavBar',
  components: {
    NavItem,
  },
  data() {
    return {
      items: [
        {
          name: 'Home',
          key: 'home-link',
          path: '/',
        },
        {
          name: 'About',
          key: 'about-link',
          path: '/about',
        },
        {
          name: 'Favorites',
          key: 'favorites-link',
          path: '/favorites',
        },
        {
          name: 'Shopping List',
          key: 'shopping-list-link',
          path: '/shopping-list',
        },
      ],
    };
  },
};
</script>

<style scoped>
  .nav-ctr {
    display: flex;
    width: 300px;
    padding: 1rem 0;
    height: 100px;
    justify-content: space-around;
    align-items: center;
  }
</style>
