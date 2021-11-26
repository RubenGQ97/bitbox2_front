import React, { Component, useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Body from './Components/body';
import {initAxios} from './Utils/auth-helper'
import './Styles/App.css';

initAxios();

export default function App(){
    
    const [tab,setTab] = useState('');

    const handleTabSelected =(tab)=>{
        setTab(tab);
    }

    return(
        <div className="container-fluid" >
            <NavBar tab={tab} handleTabSelected={handleTabSelected}  ></NavBar>
            <Body tab={tab} handleTabSelected={handleTabSelected}></Body>
        </div>
    );
}