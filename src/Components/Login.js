import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Login.scss';
import '../App.js';

import logoipn from '../images/logoipn.png';

export default class Login extends Component {
    render() {
        return (
            <div className="logincomponent">
                <div className="login-box">
                    <img className="avatar" src={logoipn} alt="logo IPN"/>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;1,100&display=swap" rel="stylesheet"/>                
                    <h3>Sistema de Gestión Escolar de Posgrado 
                        <br/>ESIA Tecamachalco
                    </h3>

                    <form>
                        
                        <label for="usuario">Usuario</label>
                        <input type="text" placeholder="Usuario"/>

                        <label for="contraseña">Contraseña</label>
                        <input type="password" placeholder="Constraseña"/>

                        <button className="boton">Login</button>
                    
                    </form>
                    
                    <a >¿Olvidaste tu contraseña?</a><br/>
                    <Link to="/preregistro">
                    <a  class="opcregistro" >Pre-registro</a>
                    </Link>
                </div>
            </div>
        )   
    }
}
