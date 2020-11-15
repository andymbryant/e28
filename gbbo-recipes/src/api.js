import axios from 'axios';

export default class APIService {
  getProduct(id = null) {
    let url = 'http://e28-api.vueserver.com/product';
    if (id) {
      url += `/${id}`;
    }
    return axios.get(url).then((res) => res.data.product);
  }
}
