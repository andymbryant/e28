import axios from 'axios';

export default class APIService {
  constructor() {
    const baseURL = process.env.NODE_ENV === 'production' ? 'https://e28-api.vueserver.com' : 'http://e28-api.vueserver.loc';
    this.axios = axios.create({
      baseURL,
      responseType: 'json',
      withCredentials: true,
    });
  }

  async getFavoriteRecipes() {
    const favorites = await this.favorite.getList();
    const recipes = await Promise.all(favorites.map((r) => this.recipe.getByID(r.recipe_id)));
    return recipes;
  }

  async getCartRecipes() {
    const cart = await this.cart.getList();
    const recipes = await Promise.all(cart.map((r) => this.recipe.getByID(r.recipe_id)));
    return recipes;
  }

  get recipe() {
    const baseUrl = '/recipe';
    return {
      getList: (params = null) => {
        const url = baseUrl;
        return this.axios.get(url, { params }).then((res) => res.data.recipe);
      },
      getByID: (id) => {
        const url = `${baseUrl}/${id}`;
        return this.axios.get(url).then((res) => res.data.recipe);
      },
      create: (data) => {
        const url = baseUrl;
        return this.axios.post(url, data).then((res) => res.data.recipe);
      },
      update: (id, data) => {
        const url = `${baseUrl}/${id}`;
        return this.axios.put(url, data).then((res) => res.data.recipe);
      },
      delete: (id) => {
        const url = `${baseUrl}/${id}`;
        return this.axios.delete(url).then((res) => res.data.recipe);
      },
    };
  }

  get favorite() {
    const baseUrl = '/favorite';
    return {
      getList: (params = null) => {
        const url = baseUrl;
        return this.axios.get(url, { params }).then((res) => res.data.favorite);
      },
      getByID: (id) => {
        const url = `${baseUrl}/${id}`;
        return this.axios.get(url).then((res) => res.data.favorite);
      },
      create: (id) => {
        const url = baseUrl;
        const data = {
          recipe_id: id,
        };
        return this.axios.post(url, data).then((res) => res.data.favorite);
      },
      update: (id, data) => {
        const url = `${baseUrl}/${id}`;
        return this.axios.put(url, data).then((res) => res.data.favorite);
      },
      delete: (id) => {
        const url = `${baseUrl}/${id}`;
        return this.axios.delete(url).then((res) => res.data.favorite);
      },
    };
  }

  get cart() {
    const baseUrl = '/cart';
    return {
      getList: (params = null) => {
        const url = baseUrl;
        return this.axios.get(url, { params }).then((res) => res.data.cart);
      },
      getByID: (id) => {
        const url = `${baseUrl}/${id}`;
        return this.axios.get(url).then((res) => res.data.cart);
      },
      create: (id) => {
        const url = baseUrl;
        const data = {
          recipe_id: id,
        };
        return this.axios.post(url, data).then((res) => res.data.cart);
      },
      update: (id, data) => {
        const url = `${baseUrl}/${id}`;
        return this.axios.put(url, data).then((res) => res.data.cart);
      },
      delete: (id) => {
        const url = `${baseUrl}/${id}`;
        return this.axios.delete(url).then((res) => res.data.cart);
      },
    };
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

  isAuthenticated() {
    const flag = this.token && this.name && this.email;
    return !!flag;
  }

  get user() {
    if (this.isAuthenticated()) {
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

  // async checkAuth() {
  //   const url = '/auth';
  //   const res = this.axios.post(url)
  //     .catch((error) => console.error(error));
  //   console.log(res);
  //   return res;
  // }

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
