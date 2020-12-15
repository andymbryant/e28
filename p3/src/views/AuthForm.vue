<template>
  <span class='auth-notice' v-if='$api.isAuthenticated()'>
    <h3>You cannot login or register because you are already logged in.</h3>
    <p>To log out, click the logout button in the nav.</p>
  </span>
  <span v-else>
    <h3>{{title}}</h3>
    <form id='auth-form'>
      <div v-show='!isLogin' class='form-field'>
        <label for="name-field">Name</label>
        <input type="text" id='name-field' name='name-field' v-model='userInfo.name' required>
      </div>
      <div class="form-field">
        <label for="email-field">Email</label>
        <input type="text" id='email-field' name='email-field' v-model='userInfo.email' required>
      </div>
      <div class="form-field">
        <label for="password-field">Password</label>
        <input type="text" id='password-field' name='password-field' v-model='userInfo.password' required>
      </div>
      <button v-if='!isLogin' :disabled='!validate()' @click.prevent='register'>Register</button>
      <button v-else :disabled='!validate()' @click.prevent='login'>Log In</button>
    </form>
  </span>
</template>

<script>
import Validator from 'validatorjs';

export default {
  name: 'AuthForm',
  data() {
    return {
      isValid: false,
      errors: {},
      userInfo: {
        name: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      this.$api.login(this.userInfo)
        .then(() => this.$router.push({ name: 'Home' }))
        .catch((error) => console.error(error));
    },
    register() {
      this.$api.register(this.userInfo)
        .then(() => this.$router.push({ name: 'Home' }))
        .catch((error) => console.error(error));
    },
    validate() {
      const loginFields = {
        email: 'required',
        password: 'required',
      };
      const registerFields = {
        name: 'required',
        email: 'required',
        password: 'required|min:8',
      };
      const validator = new Validator(this.userInfo, this.isLogin ? loginFields : registerFields);
      this.errors = validator.errors.all();

      return validator.passes();
    },
  },
  computed: {
    isLogin() {
      return this.$route.meta.isLogin;
    },
    title() {
      return this.isLogin ? 'Log In' : 'Register';
    },
  },
  watch: {
    userInfo() {
      this.validate();
    },
  },
};
</script>

<style scoped>

.auth-notice {
  text-align: center;
}

#auth-form {
  display: flex;
  flex-direction: column;
  height: 250px;
  justify-content: space-between;
  border: 1px solid black;
  padding: 1rem;
}

.form-field label {
  margin-right: 1rem;
}

.auth-buttons {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

</style>
