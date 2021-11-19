import React, { Component } from 'react';
import FormularioLogin from './formulariologin';
import { ReactComponent as Bitboxlogo } from '../../svg/bitbox.svg';
import '../../Styles/login.css';


export default function Login(props){


    return(
        <div className="col form-signin" >
            <div class="wrapper fadeInDown">
            <div id="formContent">

                <div class="fadeIn first">
                <Bitboxlogo></Bitboxlogo>
                </div>
                <FormularioLogin></FormularioLogin>
                <div id="formFooter">
                <a class="underlineHover" href="#">Forgot Password?</a>
                </div>
            </div>
            </div>

        </div>
    );
}