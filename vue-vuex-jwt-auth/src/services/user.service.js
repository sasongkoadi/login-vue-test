import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://127.0.0.1:44010/users/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'me');
  }

  getUserBoard() {
    return axios.get(API_URL + 'me', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
