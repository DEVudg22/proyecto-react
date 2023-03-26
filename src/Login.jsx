import React, { useState } from "react";
import { Capturar } from "./Capturar";

export const Login = (props) => {
    const [numTrabajador, setNumTrabajador] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(numTrabajador);
    }

    return (
        <div className="contenedor-principal">
            <h1>SISTEMA DE CAPTURA PENITENCIARIA</h1>
            <h2>INICIO DE SESIÓN</h2>
            <form className="formulario-login" onSubmit={handleSubmit}>
                <label htmlFor="numero-trabajador">Número de Trabajador: </label>
                <input value={numTrabajador} onChange={(e) => setNumTrabajador(e.target.value)}type="number" placeholder="Su ID" id="numero-trabajador" name="numero-trabajador" />
                <label htmlFor="password">Contraseña</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" onClick={ (e) => props.onFormSwitch('Capturar') }>Ingresar</button>
            </form>
            <button className="boton-enlace" onClick={() => props.onFormSwitch('Registrar')}>Ir a administrador de usuarios</button>
            <footer>Versión 2.1</footer>
        </div>
    )
}
