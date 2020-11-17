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

  get isAuthenticated() {
    const token = window.localStorage.getItem('gb_auth_token');
    const name = window.localStorage.getItem('gb_auth_name');
    const email = window.localStorage.getItem('gb_auth_email');
    return token && name && email;
  }

  getUser() {
    if (this.isAuthenticated) {
      const name = window.localStorage.getItem('gb_auth_name');
      const email = window.localStorage.getItem('gb_auth_email');
      return { name, email };
    }
    return null;
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
        window.localStorage.setItem('gb_auth_token', token);
        window.localStorage.setItem('gb_auth_name', name);
        window.localStorage.setItem('gb_auth_email', email);
      });
  }

  logout() {
    const url = '/logout';
    // const name = window.localStorage.getItem('gb_auth_name');
    // const email = window.localStorage.getItem('gb_auth_email');
    const token = window.localStorage.getItem('gb_auth_token');
    this.axios.post(url, { headers: { Authorization: `bearer ${token}` } })
      .then(() => {
        window.localStorage.removeItem('gb_auth_token');
        window.localStorage.removeItem('gb_auth_name');
        window.localStorage.removeItem('gb_auth_email');
      })
      .catch((err) => console.error(err));
  }
}
