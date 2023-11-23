import axios from 'axios';

const BOOK_API_REST_URL = "http://localhost:8080/signup";
class LoginService{
    
    saveSignUpCreds(LoginPageCreds) {
        return axios.post(BOOK_API_REST_URL, LoginPageCreds);
    }
    getUserLogindata(){
        return axios.get(BOOK_API_REST_URL);
    }

}

export default new LoginService();