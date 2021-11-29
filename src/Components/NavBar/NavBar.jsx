import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import { getToken,deleteToken } from '../../Utils/auth-helper';
import { getUsername,removeUsername } from '../../Utils/loginService';
import '../../Styles/Navbar.css'


export default function NavBar(props){

    const handleLogout = () =>{
        deleteToken();
        removeUsername();
        props.handleTabSelected("");
        props.setUserName('');
    }


    const isLogged=()=>{
        if(getToken()){
            
            return (<div className="inline">
                        
                        <button className="btn  btn-danger"  type="submit" onClick={()=>handleLogout()}>Log out</button>
                    </div>);
        }else return <button className="btn btn-sm btn-outline-light"  type="submit" onClick={()=>props.handleTabSelected("login")}>Sign up</button>
    }

    const userLogged=()=>{
        
        if(getUsername())return( <i className="fas fa-user inline"><p>{getUsername()}</p></i>);
            
    }


    return(
        <div className="row" >
            <div className="navbar navbar-dark bg-primary col">
            <div className="col-2" >
                <label className="navbar-brand"  >BitBoxer2</label>
            </div>
            <div className="col userlooged text-center" >
                {userLogged()}
            </div>
            <div className="col-1" >
                {isLogged()}
            </div>
        </div>
        </div>
        
    );
}