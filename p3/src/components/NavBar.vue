<template>
  <div class="nav-ctr">
    <div class="nav-items">
      <NavItem v-for='i in items' :key='i.key' :name='i.name' :path='i.path'/>
    </div>
    <div class="auth-ctr">
      <div class='auth-items' v-if='$api.isAuthenticated'>
        <div class='auth-greeting'>You are signed in as <strong>{{$api.getUserName()}}</strong>. Welcome!</div>
      </div>
      <div class='auth-items' v-else>
        <div class='auth-greeting'>
          <button @click='navigateToLogin'>Login</button>
          <button @click='navigateToSignup'>Signup</button>
        </div>
      </div>
    </div>
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
          name: 'Cart',
          key: 'cart-link',
          path: '/cart',
        },
      ],
    };
  },
  methods: {
    navigateToLogin() {
      this.$router.push({ name: 'Login' });
    },
  },
  computed: {
    userName() {
      return this.$api.user.name;
    },
  },
};
</script>

<style scoped>
  .nav-ctr {
    display: flex;
    width: 600px;
    padding: 1rem 0;
    height: 50px;
    justify-content: space-around;
    align-items: center;
  }
  .nav-items {
    width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .auth-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
