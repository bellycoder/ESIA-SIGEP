import React, { Component } from 'react'
import './Preregistro.scss';
import logoesia from '../images/logoesia.png';


export default class extends Component {
    render() {
        return (
            <div className="preregistro">
                <div className="preregistro-box">
                    <img className="avatar" src={logoesia} alt="logo ESIA"/>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;1,100&display=swap" rel="stylesheet"/>                
                    <h3>Pre Registro</h3>
                    <form>
                        
                        <label for="nombre">Nombre</label>
                        <input type="text" placeholder="Nombre o Nombres"/>

                        <label for="apellidop">Apellido Paterno</label>
                        <input type="text" placeholder="Apellido Paterno"/>

                        <label for="apellidom">Apellido Materno</label>
                        <input type="text" placeholder="Apellido Materno"/>

                        <label for="curp">CURP</label>
                        <input type="text" placeholder="CURP"/>

                        <label for="correo">Correo electrónico</label>
                        <input type="text" placeholder="Correo electrónico"/>

                        <label for="correo">Programa Académico</label>
                        <select name="mes">
                                    <option value="">--Programa Académico--</option>
                                    <option value="1">Maestría en ciencias en arquitectura y urbanismo </option>
                                    <option value="2">Doctorado en ciencias en arquitectura y urbanismo </option>
                                    <option value="3">Especialidad en Valuación inmobiliaria </option>
                                    <option value="4">Especialidad en restauración arquitectónica</option>
                         </select>

                        <button className="boton">Enviar datos</button>
                    
                    </form>                 
                </div>
            </div>
        )
    }
}
