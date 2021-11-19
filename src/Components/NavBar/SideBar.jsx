import React, { Component } from 'react';
import '../../Styles/sidebar.css'



export default function SideBar (props){
    return(
        <div className="col-1 bg-primary sidebar" >
                <div className="sidebar-sticky" >
                    <ul className="nav sideBarList">
                        <li className="nav-item  sideBarListItem" >
                            <a class=" font-weight-bold "  href="">Opcion1</a>
                        </li>
                        <li className="nav-item  sideBarListItem" >
                            <a class=" font-weight-bold " href="">Opcion2</a>
                        </li>
                        <li className="nav-item  sideBarListItem" >
                            <a class=" font-weight-bold " href="">Opcion3</a>
                        </li>
                        
                    </ul>
                </div>
        </div>
    );
}