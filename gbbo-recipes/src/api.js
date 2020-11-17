import axios from 'axios';

export default class APIService {
  constructor() {
    this.axios = axios.create({
      baseURL: 'http://e28-api.vueserver.com',
      responseType: 'json',
    });
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
    return this.axios.get(url, { headers: { Authorization: `Bearer ${this.token}` } }).then((res) => res.data.favorite);
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

  clearUser() {
    window.localStorage.removeItem('gb_auth_token');
    window.localStorage.removeItem('gb_auth_name');
    window.localStorage.removeItem('gb_auth_email');
  }

  async login() {
    if (this.isAuthenticated) {
      return true;
    }
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
    const url = '/logout';
    // const name = window.localStorage.getItem('gb_auth_name');
    // const email = window.localStorage.getItem('gb_auth_email');
    const token = window.localStorage.getItem('gb_auth_token');
    return this.axios.post(url, { headers: { Authorization: `bearer ${token}` } })
      .then(() => this.clearUser());
  }
}
