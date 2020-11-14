import axios from 'axios';

export default class APIService {
  getProducts() {
    const url = 'http://e28-api.vueserver.com/product';
    return axios.get(url);
  }
}
