import React, { useState } from "react";

export const Login = (props) => {
    const [correo, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(correo);
    }

    return (
        <div className="contenedor-principal">
            <h1>SISTEMA DE CAPTURA PENITENCIARIA</h1>
            <h2>INICIO DE SESIÓN</h2>
            <form className="formulario-login" onSubmit={handleSubmit}>
                <label htmlFor="correo">Correo Electrónico</label>
                <input value={correo} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="ejemplo@ejemplo.com" id="correo" name="correo" />
                <label htmlFor="password">Contraseña</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Ingresar</button>
            </form>
            <button className="boton-enlace" onClick={() => props.onFormSwitch('register')}>Ir a administrador de usuarios</button>
            <footer>Versión 1.1</footer>
        </div>
    )
}