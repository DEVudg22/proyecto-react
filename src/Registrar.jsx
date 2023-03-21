import React, { useState } from "react";

export const Registrar = (props) => {
    const [correo, setEmail] = useState('');
    const [contraseña, setPass] = useState('');
    const [nombre, setName] = useState('');

    const inicioManual = (e) => {
        e.preventDefault();
        console.log(correo);
    }

    return (
        <div className="contenedor-principal">
            <h1>SISTEMA DE CAPTURA PENITENCIARIA</h1>
            <h2>MÓDULO DE ADMINISTRADOR</h2>
            <h3>ALTA DE USUARIOS</h3>
        <form className="formulario-registro" onSubmit={inicioManual}>
            <label htmlFor="nombre">Nombre completo</label>
            <input value={nombre} name="nombre" onChange={(e) => setName(e.target.value)} id="nombre" placeholder="Nombre completo" />
            <label htmlFor="correo">Correo Electrónico</label>
            <input value={correo} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="ejemplo@ejemplo.com" id="correo" name="correo" />
            <label htmlFor="contraseña">Contraseña</label>
            <input value={contraseña} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="contraseña" name="contraseña" />
            <button type="submit">Registrar</button>
        </form>
        <button className="boton-enlace" onClick={() => props.onFormSwitch('login')}>Regresar a inicio de sesión</button>
    </div>
    )
}




