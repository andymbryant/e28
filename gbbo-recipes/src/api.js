import axios from 'axios';

export default class APIService {
  getRecipe(id = null) {
    let url = 'http://e28-api.vueserver.com/recipe';
    if (id) {
      url += `/${id}`;
    }
    return axios.get(url).then((res) => res.data.recipe);
  }

  isAuthenticated() {
    const token = window.localStorage.getItem('gb_auth_token');
    const name = window.localStorage.getItem('gb_auth_name');
    const email = window.localStorage.getItem('gb_auth_email');
    return token && name && email;
  }

  getUser() {
    if (this.isAuthenticated()) {
      const name = window.localStorage.getItem('gb_auth_name');
      const email = window.localStorage.getItem('gb_auth_email');
      return { name, email };
    }
    return null;
  }

  login() {
    const url = 'http://e28-api.vueserver.com/login';
    const data = {
      email: 'jill@harvard.edu',
      password: 'asdfasdf',
    };
    axios.post(url, data)
      .then((res) => {
        const { token, user } = res.data;
        const { name, email } = user;
        window.localStorage.setItem('gb_auth_token', token);
        window.localStorage.setItem('gb_auth_name', name);
        window.localStorage.setItem('gb_auth_email', email);
      })
      .catch((err) => console.error(err));
  }

  logout() {
    const url = 'http://e28-api.vueserver.com/logout';
    // const name = window.localStorage.getItem('gb_auth_name');
    // const email = window.localStorage.getItem('gb_auth_email');
    const token = window.localStorage.getItem('gb_auth_token');
    axios.post(url, { headers: { Authorization: `bearer ${token}` } })
      .then(() => {
        window.localStorage.removeItem('gb_auth_token');
        window.localStorage.removeItem('gb_auth_name');
        window.localStorage.removeItem('gb_auth_email');
      })
      .catch((err) => console.error(err));
  }
}
