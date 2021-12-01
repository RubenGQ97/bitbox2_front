import React, { Component, useState, useEffect } from 'react'
import { getToken } from '../../Utils/auth-helper';
import { saveItem, getItem } from '../../Utils/request-helper'
import { getUsername } from '../../Utils/loginService';
import axios from 'axios';
import { getAllSuplier } from '../../Utils/request-helper';
import { getSuplier, getOtherSuplier } from '../../Utils/request-helper';
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

        ]
    })
    const [disponibleSuplier, setDisponibleSuplier] = useState({
        proveedor: []
    })


    /**
     * 
     * @returns todos los proveedores que opta ese articulo
     */
    const suplier = () => {
        if (json.idArticulo == "") {
            let aux = [];
            getAllSuplier((suplier) => {
                suplier.map(proveedores => {
                    aux.push(proveedores.nombre);
                })
                console.log("bbb", aux)
            })
            setDisponibleSuplier({ ...disponibleSuplier, proveedor: aux })

        } else {
            getOtherSuplier((suplier) => {
                setDisponibleSuplier({ ...disponibleSuplier, proveedor: suplier })
                console.log("aaaa", suplier)
            }, json.idArticulo)
        }
    }


    /**
     * 
     * @returns informacion del item
     */
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
        } else {
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

                ]
            })
        }
    }


    const handleSaveChange = async (e) => {
        e.preventDefault();
        if (json.codigo!="" &&json.descripcion!="") {
            
            console.log("se intenta guardar nuevo item")
            setJson({ ...json, codigo: props.itemSelected })
            let responde = await saveItem(json);
            if (responde) {
                props.setItemSelected('');
                props.handleTabSelected('inventario')
            }
        }


    }


    const isEdit = () => {
        if (props.itemSelected == "") return "Nuevo Articulo"
        return json.descripcion;
    }




    useEffect(() => {
        getItemByCode();
        suplier();
    }, [props.itemSelected])







    if (getToken()) {
        return (
            <div className="col">
                <h2 className=" newItemTitle">{isEdit()}</h2>
                <div className="row  border "></div>
                <div className="row  margin" id="formularioNuevoElemento" >
                    <div className="card card-outline-secondary">
                        <div className="card-header">
                            <h3 className="mb-0">{isEdit()}</h3>
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
                                <div class="form-check check_buttons">
                                    <input class="form-check-input"
                                        type="checkbox"
                                        checked={json.estado}
                                        onChange={(e) => setJson({ ...json, estado: !json.estado })}
                                        id="defaultCheck1" />
                                    <label class="form-check-label" for="defaultCheck1">
                                        Estado
                                    </label>
                                </div><br />

                                <input type="submit" value="Guardar" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else return <div></div>

}
