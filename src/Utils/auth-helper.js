import Axios from 'axios';

const TOKEN_KEY='BITBOXER2_FORMACION';


export function setToken(token){
    localStorage.setItem(TOKEN_KEY,token);
}


export function getToken(){
    return localStorage.getItem(TOKEN_KEY);
}

export function deleteToken(){
    localStorage.removeItem(TOKEN_KEY);
}

export function initAxios(){
    Axios.interceptors.request.use(function(config){
        const token = getToken();
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
            
        }
        return config;
    });
}





window.onbeforeunload = function() {
    localStorage.removeItem('BITBOXER2_FORMACION');
    localStorage.removeItem('UserName_BITBOXER2');
    return '';
  };
export default {setToken,getToken,deleteToken,initAxios}