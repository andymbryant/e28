<template>
  <div>Register New User</div>
  <form id='register-user-form' @submit.prevent>
    <div class='form-field'>
      <label for="name-field">Name</label>
      <input type="text" id='name-field' v-model='userInfo.firstName' @change='validate' required>
    </div>
    <div class="form-field">
      <label for="email">Email</label>
      <input type="text" id='' v-model='userInfo.lastName' @change='validate' required>
    </div>
    <div class="form-field">
      <label for="password-input">Password</label>
      <input type="password" v-model='userInfo.password' @change='validate' required>
    </div>
    <button type='submit' :disabled='!validate()' for='register-user-form'>Register</button>
  </form>
</template>

<script>
import Validator from 'validatorjs';

export default {
  name: 'RegisterUser',
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
    submit() {

    },
    validate() {
      const validator = new Validator(this.userInfo, {
        name: 'required',
        email: 'required',
        password: 'required',
      });

      this.errors = validator.errors.all();

      return validator.passes();
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

#register-user-form {
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

</style>
