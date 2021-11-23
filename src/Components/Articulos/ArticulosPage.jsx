import React, { Component } from 'react';
import TablaArticulo from './TablaArticulo';
import Buscador from './Buscador';
import '../../Styles/TablaArticulo.css'


export default function ArticuloPage(props){


    return(
        <div className="col paginaArticulos" >
            <Buscador></Buscador>
            <TablaArticulo></TablaArticulo>
        </div>
    );
}