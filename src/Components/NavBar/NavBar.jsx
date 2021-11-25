import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import '../../Styles/Navbar.css'


export default function NavBar(props){
    return(
        <div className="row" >
            <div className="navbar navbar-dark bg-primary col">
            <div className="col-2" >
                <label className="navbar-brand"  >BitBoxer2</label>
            </div>
            <div className="col" >
            </div>
            <div className="col-1" >
                <button className="btn btn-sm btn-outline-light"  type="submit" onClick={()=>props.handleTabSelected("login")}>Sign up</button>
            </div>
        </div>
        </div>
        
    );
}