<template>
  <div class="nav-ctr">
    <div class="nav-items">
      <NavItem v-for='i in items' :key='i.key' :name='i.name' :path='i.path'/>
    </div>
    <div class="auth-ctr">
      <div class='auth-items' :key='authKey' v-if='$api.isAuthenticated()'>
        <div class='auth-greeting'>Hello, <span data-test='user-name' class='user-name'>{{username}}</span>
          <button class='auth-button' @click='logout'>Logout</button>
        </div>
      </div>
      <div class='auth-items' v-else>
        <button @click='navigateToLogin'>Login</button>
        <button class='auth-button' @click='navigateToRegister'>Register</button>
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
      authKey: 0,
    };
  },
  methods: {
    navigateToLogin() {
      this.$router.push({ name: 'Login' });
    },
    navigateToRegister() {
      this.$router.push({ name: 'Register' });
    },
    logout() {
      this.$api.logout()
        .then(() => this.$store.dispatch('initData'))
        .then(() => this.$nextTick(() => this.authKey += 1))
        .finally(() => this.$router.push({ name: 'Home' }));
    },
  },
  computed: {
    username() {
      const username = this.$api.user.name;
      const length = 15;
      if (username.length < length) {
        return username;
      }
      return `${username.substring(0, length)}...`;
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
  .auth-button {
    margin-left: 1rem;
  }
  .user-name {
    font-weight: 700;
  }
</style>
