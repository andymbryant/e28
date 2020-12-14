<template>
  <h3>{{title}}</h3>
  <form id='auth-form'>
    <div v-if='!isLogin' class='form-field'>
      <label for="name-field">Name</label>
      <input type="text" id='name-field' v-model='userInfo.name' required>
    </div>
    <div class="form-field">
      <label for="email">Email</label>
      <input type="text" id='' v-model='userInfo.email' required>
    </div>
    <div class="form-field">
      <label for="password-input">Password</label>
      <input type="password" v-model='userInfo.password' required>
    </div>
    <button v-if='!isLogin' :disabled='!validate()' @click.prevent='signup'>Sign Up</button>
    <button v-else :disabled='!validate()' @click.prevent='login'>Log In</button>
  </form>
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
        email: 'jill@harvard.edu',
        password: 'asdfasdf',
      },
    };
  },
  methods: {
    login() {
      this.$api.login(this.userInfo)
        .then((res) => console.log(res))
        .catch((error) => console.error(error));
    },
    signup() {
      this.$api.signup(this.userInfo)
        .then((res) => console.log(res));
    },
    validate() {
      const loginFields = {
        email: 'required',
        password: 'required',
      };
      const registerFields = {
        name: 'required',
        email: 'required',
        password: 'required',
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
