import React, { Component, useState,useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Body from './Components/body';
import {initAxios} from './Utils/auth-helper'
import { getUsername } from './Utils/loginService';
import './Styles/App.css';

initAxios();





export default function App(){
    
    const [tab,setTab] = useState('');
    const [userName,setUserName] = useState('');
    const handleTabSelected =(tab)=>{
        setTab(tab);
    }

    useEffect(() => {
        setUserName(getUsername());
    }, [tab,userName])

    return(
        <div className="container-fluid" >
            <NavBar tab={tab} handleTabSelected={handleTabSelected} setUserName={setUserName} ></NavBar>
            <Body tab={tab} handleTabSelected={handleTabSelected} ></Body>
        </div>
    );
}