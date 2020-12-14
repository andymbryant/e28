import axios from 'axios';

export default class APIService {
  constructor() {
    const baseURL = process.env.NODE_ENV === 'production' ? 'https://e28-api.vueserver.com' : 'http://127.0.0.1:8000';
    this.axios = axios.create({
      baseURL,
      responseType: 'json',
      withCredentials: true,
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

  async login({ email, password }) {
    if (!email) console.error('email required');
    if (!password) console.error('password required');
    const url = '/login';
    const userData = {
      email,
      password,
    };

    return this.axios.post(url, userData)
      .then((res) => {
        const { token, user } = res.data;
        this.token = token;
        this.email = user.email;
        this.name = user.name;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async checkAuth() {
    const url = '/auth';
    return this.axios.post(url)
      .then(() => this.clearUser())
      .catch((error) => console.error(error));
  }

  async logout() {
    // TODO: implement logout to properly logout with user info.
    const url = '/logout';
    return this.axios.post(url)
      .then(() => this.clearUser())
      .catch((error) => console.error(error));
  }

  async register({ name, email, password }) {
    if (!name) console.error('name required');
    if (!email) console.error('email required');
    if (!password) console.error('password required');
    const userData = {
      name,
      email,
      password,
    };
    const url = '/register';
    return this.axios.post(url, userData)
      .then((res) => {
        const { token, user } = res.data;
        this.token = token;
        this.email = user.email;
        this.name = user.name;
      })
      .catch((error) => console.error(error));
  }
}
