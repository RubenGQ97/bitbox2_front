import React, { Component, useState, useEffect } from 'react';
import TablaArticulo from './TablaArticulo';
import Buscador from './Buscador';
import PaginaDetalleArticulo from '../Details/PaginaDetalleArticulo';
import axios from 'axios';
import { getToken } from '../../Utils/auth-helper';
import '../../Styles/TablaArticulo.css'


export default function ArticuloPage(props){
    const[articulos, setArticulos]= useState();
    const[peticion,setPeticion]= useState("all");
    const[itemSelected,setItemSelected]= useState("");


    const selected =()=>{
        if(itemSelected!="") {
            console.log(itemSelected);
            return <PaginaDetalleArticulo itemSelected={itemSelected} ></PaginaDetalleArticulo>
        }else return <TablaArticulo setItemSelected={setItemSelected} articulos={articulos}></TablaArticulo>
    }

    const getData = async () => {
        let url = 'http://localhost:8080/bitboxer2/articulos/'+peticion        
        const response = await axios.get(url)
        .catch(error =>{
            setPeticion("all")
        });
        if(response){
            console.log('response', response)
            setArticulos(response.data)
        }
 
    }
    


    useEffect(()=>{
        getData()
        console.log('articulo', articulos)
    },[peticion]);



    return(
        <div className="col paginaArticulos" >
            <Buscador setPeticion={setPeticion} ></Buscador>
            {selected()}
        </div>
    );
}