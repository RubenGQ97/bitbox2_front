import React, { Component, useState } from 'react';
import {login} from '../../Utils/loginService'
import { setToken,getToken, initAxios } from '../../Utils/auth-helper';
import '../../Styles/login.css';


export default function FormularioLogin (props){
    const[userName,setUserName]= useState("UserName");
    const[password,setPassword] = useState('Password')
    const[isLogged,setIsLogged] = useState(false)

    const handleLogin = async (event)=>{
        event.preventDefault();

        try{
            
            const sesion = await login({userName,password});
            if(sesion){
                setPassword('');
                setUserName('');
                setIsLogged(false);
                setToken(sesion.jwtoken);
                console.log(sesion);
                console.log(getToken());
                props.handleTabSelected('');
            }
            
        }catch(e){
            console.log("Credenciales erroneas"+e);
        }
    }
    


    return(

        <form  onSubmit={handleLogin}>
        <input type="text" id="login" class="fadeIn second" name="login" placeholder={userName} onChange={({target})=>setUserName(target.value)}></input>
        <input type="text" id="password" class="fadeIn third" name="login" placeholder={password} onChange={({target})=>setPassword(target.value)}></input>
        <input type="submit" class="fadeIn fourth" value="Log In"></input>
        </form>
    );
}