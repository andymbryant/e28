import axios from 'axios';

export default class APIService {
  getRecipe(id = null) {
    let url = 'http://e28-api.vueserver.com/recipe';
    if (id) {
      url += `/${id}`;
    }
    return axios.get(url).then((res) => res.data.recipe);
  }
}
