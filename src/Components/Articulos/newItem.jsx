import React, { Component,useState } from 'react'
import { getToken } from '../../Utils/auth-helper';
import saveItem from '../../Utils/request-helper'
import { getUsername } from '../../Utils/loginService';
import '../../Styles/newItem.css'

export const NewItem = ()=>{
    const[json,setJson]=useState({
        itemid:"",
        code:"",
        description:"",
        price:"",
        estado:"",
        creator:getUsername(),
    })



    const handleSaveChange =()=>{
        console.log("se guarda nuevo item")
        saveItem(json);
        
    }


    if(getToken()){
        return(
            <div className="col">
                <h2 className=" newItemTitle">Nuevo Articulo</h2>
                <div className="row  border "></div>
                <div className="row  margin" id="formularioNuevoElemento" >
                    <div className="card card-outline-secondary">
                        <div className="card-header">
                            <h3 className="mb-0">Formulario Nuevo Articulo</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={()=>handleSaveChange()} className="form">
                                <div className="form-group form-inline row">
                                    <label className="col-form-label form-control-label ">Codigo</label>
                                    <div className="col">
                                        <input className="form-control" 
                                                type="text" 
                                                value={json.code} 
                                                placeholder="Codigo "
                                                onChange={(e)=>setJson({...json, code:e.target.value})}
                                                />
                                    </div>
                                    
                                </div>
                                <div className="form-group form-inline row">
                                    <label className="col-form-label form-control-label ">Descripcion</label>
                                    <div className="col">
                                        <input className="form-control" 
                                            type="text" 
                                            placeholder="Descripcion "
                                            onChange={(e)=>setJson({...json, description:e.target.value})}
                                            />
                                    </div>
                                    
                                </div>
                                <div className="form-group form-inline row">
                                    <label className="col-form-label form-control-label ">Precio</label>
                                    <div className="col">
                                        <input className="form-control" 
                                            type="text" 
                                            placeholder="Precio en € Euros "
                                            onChange={(e)=>setJson({...json, price:e.target.value})}
                                            />
                                    </div>
                                    
                                </div>
                                <input type="submit" value="Guardar"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }else return <div></div>
    
}
