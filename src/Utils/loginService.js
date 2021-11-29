import axios from "axios";

const url="http://localhost:8080/bitboxer2/auth/authentication"
const TOKEN_USER='UserName_BITBOXER2';


export const login = async credentials =>{
    const{data} = await axios.post(url,credentials)
    .catch(err =>{
        console.log(err);
    });

    if(data){
        setUsername(credentials.userName)
        return data;
    } 
    
}


function setUsername(username){
    localStorage.setItem(TOKEN_USER,username)
}

export function getUsername(){
    return localStorage.getItem('UserName_BITBOXER2');
}

export function removeUsername(){
    localStorage.removeItem('UserName_BITBOXER2');
}


export default {login,getUsername};