import React, { Component } from 'react';
import './Login.scss';
import logoipn from '../images/logoipn.png';

export default class Login extends Component {
    render() {
        return (
            <div className="login-box">
                <img className="avatar" src={logoipn} alt="logo IPN"/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;1,100&display=swap" rel="stylesheet"/>                
                <h3>Sistema de Gestión Escolar de Posgrado 
                    <br/>ESIA Tecamachalco
                </h3>

                <form>
                    
                    <label for="username">Username</label>
                    <input type="text" placeholder="Username"/>

                    <label for="password">Password</label>
                    <input type="text" placeholder="Password"/>

                    <button className="boton">Login</button>
                  
                </form>
                
                <a href="#">¿Olvidaste tu contraseña?</a><br/>
                <a  class="opcregistro" href="#">Pre-registrate aquí</a>
               
            </div>
        )
    }
}
