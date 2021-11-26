import axios from "axios";

const url="http://localhost:8080/bitboxer2/auth/authentication"

export const login = async credentials =>{
    const{data} = await axios.post(url,credentials);
    return data;
}

export default login;