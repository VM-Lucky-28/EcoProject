import  axios from "axios";
const BASE_URL = "http://localhost:8080/signup";

class MainService {
  saveLoginCreds(loginCreds) {
    return axios.post(BASE_URL, loginCreds)
  }
}


export default new MainService();