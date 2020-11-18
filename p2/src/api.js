import axios from 'axios';

export default class APIService {
  constructor() {
    this.axios = axios.create({
      baseURL: 'http://e28-api.vueserver.com',
      responseType: 'json',
    });
  }

  get config() {
    // Header configuration for use in axios
    return { headers: { Authorization: `Bearer ${this.token}` } };
  }

  getRecipe(id = null) {
    let url = '/recipe';
    if (id) {
      url += `/${id}`;
    }
    return this.axios.get(url).then((res) => res.data.recipe);
  }

  getFavorite(id = null) {
    let url = '/favorite';
    if (id) {
      url += `/${id}`;
    }
    return this.axios.get(url, this.config).then((res) => res.data.favorite);
  }

  getCart(id = null) {
    let url = '/cart';
    if (id) {
      url += `/${id}`;
    }
    // const config = JSON.parse(JSON.stringify(this.config));
    return this.axios.get(url, this.config).then((res) => res.data.cart);
  }

  get token() {
    return window.localStorage.getItem('gb_auth_token');
  }

  set token(token) {
    window.localStorage.setItem('gb_auth_token', token);
  }

  get email() {
    return window.localStorage.getItem('gb_auth_email');
  }

  set email(email) {
    window.localStorage.setItem('gb_auth_email', email);
  }

  get name() {
    return window.localStorage.getItem('gb_auth_name');
  }

  set name(name) {
    window.localStorage.setItem('gb_auth_name', name);
  }

  get isAuthenticated() {
    return this.token && this.name && this.email;
  }

  get user() {
    if (this.isAuthenticated) {
      return { name: this.name, email: this.email };
    }
    return null;
  }

  getUserName() {
    return this.name;
  }

  async clearUser() {
    window.localStorage.removeItem('gb_auth_token');
    window.localStorage.removeItem('gb_auth_name');
    window.localStorage.removeItem('gb_auth_email');
  }

  async login() {
    // TODO: implement login to take user input, rather than hard-coded dummy user data
    const url = '/login';
    const userData = {
      email: 'jill@harvard.edu',
      password: 'asdfasdf',
    };
    return this.axios.post(url, userData)
      .then((res) => {
        const { token, user } = res.data;
        const { name, email } = user;
        this.token = token;
        this.email = email;
        this.name = name;
      });
  }

  async logout() {
    // TODO: implement logout to properly logout with user info.
    const url = '/logout';
    // const config = JSON.parse(JSON.stringify(this.config));
    return this.axios.post(url, this.config)
      .then(() => this.clearUser());
  }
}
