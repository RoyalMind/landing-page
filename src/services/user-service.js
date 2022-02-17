import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "https://localhost:44318/api/v1"

class UserService 
{
    getPublicContent() 
    {
        return axios.get(API_URL + '/user');
    }
    getUserBoard(userId) {
        return axios.get(API_URL + '/user/' + userId, { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get(API_URL + '/mod/', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(API_URL + '/admin/', { headers: authHeader() });
    }
}

export default new UserService();