import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import { getToken } from '../../Utils/auth-helper';
import '../../Styles/Navbar.css'


export default function NavBar(props){


    const isLogged=()=>{
        if(getToken()){
            
            return <button className="btn  btn-danger"  type="submit" onClick={()=>props.handleTabSelected("logout")}>Log out</button>
        }else return <button className="btn btn-sm btn-outline-light"  type="submit" onClick={()=>props.handleTabSelected("login")}>Sign up</button>
    }


    return(
        <div className="row" >
            <div className="navbar navbar-dark bg-primary col">
            <div className="col-2" >
                <label className="navbar-brand"  >BitBoxer2</label>
            </div>
            <div className="col" >
            </div>
            <div className="col-1" >
                {isLogged()}
            </div>
        </div>
        </div>
        
    );
}