import React, { Component, useState, useEffect } from 'react'
import { getToken } from '../../Utils/auth-helper';
import { saveItem, getItem } from '../../Utils/request-helper'
import { getUsername } from '../../Utils/loginService';
import axios from 'axios';
import '../../Styles/newItem.css'

export const NewItem = (props) => {
    const [json, setJson] = useState({
        idArticulo: "",
        codigo: "",
        descripcion: "",
        precio: "",
        estado: "true",
        fechaDeCreacion: new Date(Date.now()),
        creador: {
            nombre: getUsername(),
        },
        proveedor: [
            {
                
            }
        ]
    })


    const getItemByCode = async () => {

        if (props.itemSelected != "") {
            let url = 'http://localhost:8080/bitboxer2/articulos/code/' + props.itemSelected
            const response = await axios.get(url)
                .catch(error => {
                    console.log(error)
                });
            if (response) {
                setJson(response.data[0])
            }
        }else{
            setJson({
                idArticulo: "",
                codigo: "",
                descripcion: "",
                precio: "",
                estado: "true",
                fechaDeCreacion: new Date(Date.now()),
                creador: {
                    nombre: getUsername(),
                },
                proveedor: [
                    {

                    }
                ]
            })
        }



    }


    useEffect(() => {
        getItemByCode()
    }, [props.itemSelected])


     const handleSaveChange = async (e) => {
        e.preventDefault();
        console.log("se intenta guardar nuevo item")
        setJson({ ...json, codigo: props.itemSelected })
        let responde = saveItem(json);
        if(responde){
            props.setItemSelected('');
            props.handleTabSelected('inventario')
        }

    }


    if (getToken()) {
        return (
            <div className="col">
                <h2 className=" newItemTitle">Nuevo Articulo</h2>
                <div className="row  border "></div>
                <div className="row  margin" id="formularioNuevoElemento" >
                    <div className="card card-outline-secondary">
                        <div className="card-header">
                            <h3 className="mb-0">Formulario Nuevo Articulo</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={(e) => handleSaveChange(e)} className="form">
                                <div className="form-group form-inline row">
                                    <label className="col-form-label form-control-label ">Codigo</label>
                                    <div className="col">
                                        <input className="form-control"
                                            type="text"
                                            value={json.codigo}
                                            placeholder="Codigo "
                                            onChange={(e) => setJson({ ...json, codigo: e.target.value })}
                                        />
                                    </div>

                                </div>
                                <div className="form-group form-inline row">
                                    <label className="col-form-label form-control-label ">Descripcion</label>
                                    <div className="col">
                                        <input className="form-control"
                                            type="text"
                                            placeholder="Descripcion "
                                            value={json.descripcion}
                                            onChange={(e) => setJson({ ...json, descripcion: e.target.value })}
                                        />
                                    </div>

                                </div>
                                <div className="form-group form-inline row">
                                    <label className="col-form-label form-control-label ">Precio</label>
                                    <div className="col">
                                        <input className="form-control"
                                            type="text"
                                            placeholder="Precio en € Euros "
                                            value={json.precio}
                                            onChange={(e) => setJson({ ...json, precio: e.target.value })}
                                        />
                                    </div>

                                </div>
                                <input type="submit" value="Guardar" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else return <div></div>

}
