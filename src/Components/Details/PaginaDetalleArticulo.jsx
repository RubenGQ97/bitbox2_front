import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import '../../Styles/detailItem.css'

export default function PaginaDetalleArticulo(props) {
    const [item, setItem] = useState();
    const randomImage = () => {
        return "https://picsum.photos/seed/" + Math.random + "/500/700"
    }



    const getSuplier =()=>{
        return  item?.proveedor.map(function(proveedor){
            console.log(proveedor.nombre)
            return (<div>
                    <a >{proveedor.nombre}</a><br />
                </div>)
        });
        
        
    }


    const getItemByCode = async () => {
        let url = 'http://localhost:8080/bitboxer2/articulos/code/' + props.itemSelected
        const response = await axios.get(url)
            .catch(error => {
                console.log(error)
            });
        if (response) {
            setItem(response.data[0])
        }

    }


    useEffect(() => {
        getItemByCode();
        
    }, [])

    useEffect(() => {
        getSuplier()
    }, [item])


    return (
        <div>
            <button className="btn btn-outline btn-lg" type="button">
                <i class="fas fa-long-arrow-alt-left"></i>
            </button>

            <div className="row border-top p-0" >
                <div className="col-4 pt-4" >

                    <img src={randomImage()} />
                </div>
                <div className="col-8 border-left w-100" >
                    <div className="tituloDetalleArticulo">
                        <h2 className="border-bottom titulo">{item?.descripcion}</h2>
                    </div>
                    <div className="groupDeatils ">
                        <h2>Precio: {item?.precio}€</h2><br />
                        <h2>Codigo: {item?.codigo}</h2><br />
                        <h2>Fecha de creacion: {moment(item?.fechaDeCreacion).format('YYYY-MM-DD')}</h2><br />
                        <h2>Creador: {item?.creador?.nombre}</h2><br /><br />
                        <div class="btn-group dropright">
                            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Proveedores
                            </button>
                            <div class="dropdown-menu">
                                {getSuplier()}
                            </div>
                        </div><br />
                        <h2>Oferta: {item?.reduccion[0]?.precio}€</h2> desde el
                        <h2>{moment(item?.reduccion[0]?.fechaInicio).format('YYYY-MM-DD')}</h2> hasta
                        <h2>{moment(item?.reduccion[0]?.fechaFin).format('YYYY-MM-DD')}</h2>
                    </div>

                </div>


            </div>
        </div>

    );
}