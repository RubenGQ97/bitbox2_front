
import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import '../../Styles/TablaArticulo.css'
import moment from 'moment';

export default function TablaArticulo(props) {



    const handleClickOnEdit = (codigo)=>{
        props.setItemSelected(codigo);
        props.handleTabSelected('crear')
    }



    const renderHeader = () => {
        let headerElement = ['', 'Detalles', 'Codigo', 'Descripcion', 'Estado', 'Precio', 'Fecha de Creacion', 'Creador']

        return headerElement.map((key, index) => {
            return <th scope="col" key={index}>{key.toUpperCase()}</th>
        })
    }


    const renderBody = () => {
        if (Array.isArray(props?.articulos)) {
            if(props.articulos.length ==0) return <td colSpan="8" ><div className="alert alert-secondary" role="alert">No se han encontrado elementos</div></td>
            return props.articulos && props.articulos.map(({ codigo, creador, descripcion, estado, fechaDeCreacion, precio }) => {
                return (
                    <tr >
                        <td>
                            <ul className="list-inline m-0" >
                                <li className="list-inline-item" >
                                    <button className="btn btn-success btn-sm rounded-0" type="button">
                                        <i class="fa fa-edit" onClick={() =>handleClickOnEdit(codigo)}></i>
                                    </button>
                                </li>
                                <li className="list-inline-item" >
                                    <button className="btn btn-danger btn-sm rounded-0" type="button">
                                        <i class="fa fa-trash" ></i>
                                    </button>
                                </li>
                            </ul>
                        </td>
                        <td><button className="btn btn-link" type="button"><i className="fas fa-exclamation-circle" onClick={()=>props.setItemSelected(codigo)}></i></button></td>
                        <td>{codigo}</td>
                        <td>{descripcion}</td>
                        <td><input type="checkbox" checked={estado} /></td>
                        <td>{precio}€</td>
                        <td>{moment(fechaDeCreacion).format('YYYY-MM-DD')}</td>
                        <td>{creador['nombre']}</td>
                    </tr>
                )
            })
        } 
    }






    return (
        <div className="row table-responsive border-top">
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