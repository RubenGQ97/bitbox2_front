import React, { Component, useEffect, useState } from 'react';
import '../../Styles/TablaArticulo.css'


export default function Buscador(props) {
    const [code, setCode] = useState('')
    const[estado,setEstado]=useState(false);
    const handleOnchangeCode = (e) => {
        setCode(e.target.value);
    }

    const handleOnchangeEstado = (event) => {
        setEstado(!estado);
    }

    useEffect(() => {
        props.setPeticion("code/" + code);
    }, [code])

    useEffect(() => {
        if(estado){
            props.setPeticion("estado/" + estado);
        }else props.setPeticion("all"); 
        
    }, [estado])

    return (
        <div className="row-fluid inline">
            <form className="buscadorArticulo form-inline">
                <div className="form-inline form-group TablaArticulos" >
                    <input type="textarea" value={code} class="form-control" placeholder="Codigo del articulo" onChange={handleOnchangeCode} ></input>
                    <input class="form-control" placeholder="Descripcion"></input>
                    <input class="form-control" placeholder="Precio"></input>
                    <input class="form-control" placeholder="Fecha de creacion"></input>
                    <input class="form-control" placeholder="Creador"></input>
                </div>
                <div class="form-check check_buttons">
                    <input class="form-check-input" type="checkbox" value={estado} onClick={handleOnchangeEstado} id="defaultCheck1"/>
                    <label class ="form-check-label" for="defaultCheck1">
                    Solo articulos activos
                    </label>
                </div>
            </form>
        </div>
    );
}