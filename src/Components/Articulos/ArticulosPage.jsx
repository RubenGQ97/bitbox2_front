import React, { Component, useState, useEffect } from 'react';
import TablaArticulo from './TablaArticulo';
import Buscador from './Buscador';
import axios from 'axios';
import '../../Styles/TablaArticulo.css'


export default function ArticuloPage(props){
    const array = useState([]);
    const articulos = array[0];
    const setArticulos = array[1];


    const getData = async () => {
        let url = 'http://localhost:8080/bitboxer2/articulos/all'

        const response = await axios.get(url)
        console.log('response', response)
        setArticulos(response.data)
    }
    


    useEffect(()=>{
        getData()
    },[])


    return(
        <div className="col paginaArticulos" >
            <Buscador></Buscador>
            <TablaArticulo articulos={articulos}></TablaArticulo>
        </div>
    );
}