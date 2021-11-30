import React, { Component } from 'react';
import '../../Styles/sidebar.css'



export default function SideBar (props){

    const handleChangetab = ()=>{
        props.handleTabSelected('inventario');
        props.setItemSelected('')
    }

    const handleNewItem=()=>{
        props.handleTabSelected('crear');
        props.setItemSelected('');
    }

    

    return(
        <div className="col-1 bg-primary sidebar" >
                <div className="sidebar-sticky" >
                    <ul className="nav sideBarList">
                        <li className="nav-item  sideBarListItem" >
                        <button className="btn btn-primary btn-md">
                        <i class="fas fa-archive"><a class=" font-weight-bold "  onClick={()=>handleChangetab()} >Inventario </a></i>
                        </button>
                        </li>
                        <li className="nav-item  sideBarListItem" >
                            <button className="btn btn-primary btn-sm">
                                <i class="fas fa-plus"><a class=" font-weight-bold " onClick={()=>handleNewItem()} >Nuevo articulo</a></i>
                            </button>
                            
                        </li>
                        
                    </ul>
                </div>
        </div>
    );
}