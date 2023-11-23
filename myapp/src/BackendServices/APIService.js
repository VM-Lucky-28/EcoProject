import axios from 'axios';

const BOOK_API_REST_URL = "http://localhost:8080/signup";
class APIService {
    
    saveSignUpCreds(signUpCreds) {
        return axios.post(BOOK_API_REST_URL, signUpCreds);
    }
    getUserLogindata(){
        return axios.get(BOOK_API_REST_URL);
    }

}

export default new APIService();