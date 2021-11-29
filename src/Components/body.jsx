import React, { Component, useState} from 'react';
import { Route,Routes } from 'react-router';
import Login from './Login/Login';
import SideBar from './NavBar/SideBar';
import ArticuloPage from './Articulos/ArticulosPage';
import fondo from '../svg/image.png';
import { NewItem } from './Articulos/newItem';
import '../Styles/body.css'

export default function Body(props){
    const[itemSelected,setItemSelected]= useState("");


    const selectTab =(tab) =>{
        switch (tab) {
            case 'login':
                return <Login handleTabSelected={props.handleTabSelected}></Login>;
            case 'inventario':
                return <ArticuloPage itemSelected={itemSelected} setItemSelected={setItemSelected}></ArticuloPage>
            case 'crear':
                return <NewItem></NewItem>
            default:
                return <div className="col presentation"><img src={fondo} /></div>;
        }
    
    }


    return(
        <div className="row body " >
            <SideBar tab={props.tab} handleTabSelected={props.handleTabSelected} setItemSelected={setItemSelected} ></SideBar>
            {selectTab(props.tab)}
            
            
        </div>
    );
}


