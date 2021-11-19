import React, { Component, useState } from 'react';
import Login from './Login/Login';
import SideBar from './NavBar/SideBar';
import ArticuloPage from './Articulos/ArticulosPage';
import '../Styles/body.css'

export default function Body(props){


    return(
        <div className="row body " >
            <SideBar tab={props.tab} handleTabSelected={props.handleTabSelected}></SideBar>
            {selectTab(props.tab)}
        </div>
    );
}


const selectTab =(tab) =>{

    switch (tab) {
        case 'login':
            return <Login></Login>;
        case 'inventario':
            return <ArticuloPage></ArticuloPage>
        default:
            return <Login></Login>;
    }

}