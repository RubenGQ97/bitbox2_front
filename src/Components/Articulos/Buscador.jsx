import React, { Component } from 'react';
import '../../Styles/TablaArticulo.css'


export default function Buscador(){

    return(
        <div className="row-fluid inline">
            <form className="buscadorArticulo form-inline">
                <div className="form-inline form-group TablaArticulos" >
                <input class="form-control" placeholder="Codigo del articulo"></input>
                <input class="form-control" placeholder="Descripcion"></input>
                <input class="form-control" placeholder="Estado"></input>
                <input class="form-control" placeholder="Precio"></input>
                <input class="form-control" placeholder="Fecha de creacion"></input>
                <input class="form-control" placeholder="Creador"></input>
                <button className="btn btn-primary mb-2 searchButton" >Buscar</button>
                <i class="fa fas-search"></i>
                </div>
            </form>
        </div>
    );
}