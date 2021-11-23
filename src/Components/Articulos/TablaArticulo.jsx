
import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import '../../Styles/TablaArticulo.css'
import moment from 'moment';

export default function TablaArticulo(props){
    const array = useState([]);
    const articulos = array[0];
    const setArticulos = array[1];


    const getData = async () => {
        let url = 'http://localhost:8080/bitboxer2/articulos/all'

        const response = await axios.get(url)
        console.log('response', response)
        setArticulos(response.data)
    }


    const renderHeader = () => {
        let headerElement = ['Detalles','Codigo', 'Descripcion', 'Estado', 'Precio', 'Fecha de Creacion','Creador']

        return headerElement.map((key, index) => {
            return <th scope="col" key={index}>{key.toUpperCase()}</th>
        })
    }



    const renderBody = () => {
        return articulos && articulos.map(({ codigo, creador, descripcion, estado,fechaDeCreacion,precio }) => {
            return (
                <tr >
                    <td><i class="fas fa-exclamation-circle"></i></td>
                    <td>{codigo}</td>
                    <td>{descripcion}</td>
                    <td><input type="checkbox" checked={estado} /></td>
                    <td>{precio}€</td>
                    <td>{moment(fechaDeCreacion).format('YYYY-MM-DD') }</td>
                    <td>{creador['nombre']}</td>
                </tr>
            )
        })
    }


    useEffect(()=>{
        getData()
    },[])



    return (
        <div className="row table-responsive">
            <h1 id='title'>Articulos</h1>
            <table className="table table-striped ">
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </div>
    )
}