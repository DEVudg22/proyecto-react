import React, { useState } from "react";

export const Capturar = (props) => {
    const [nombre, setNombre] = useState('');
    const [apellidoPat, setApellidoPat] = useState('');
    const [apellidoMat, setApellidoMat] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nombre);
    }

    return (

        <div className="contenedor-principal">
            
            <h1>MÓDULO DE CAPTURA</h1>
            <h2>POR FAVOR CAPTURE DATOS DEL DETENIDO</h2>
            <form className="formulario-captura" onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre: </label>
                <input value={nombre} onChange={(e) => setNombre(e.target.value)}type="text" placeholder="Nombre" id="nombre" name="nombre" />
                <label htmlFor="apellido-pat">Apellido Paterno: </label>
                <input value={apellidoPat} onChange={(e) => setApellidoPat(e.target.value)} type="text" placeholder="Apellido Paterno" id="apellido-pat" name="apellido-pat" />
                <label htmlFor="apellido-mat">Apellido Materno: </label>
                <input value={apellidoMat} onChange={(e) => setApellidoMat(e.target.value)} type="text" placeholder="Apellido Materno" id="apellido-mat" name="apellido-mat" />

                
                {<button type="submit">Guardar Cambios</button>}
            </form>
            {/*<button className="boton-enlace" onClick={() => props.onFormSwitch('register')}>Ir a administrador de usuarios</button>
            */}
            <footer>Versión 2.1</footer>
            
        </div>
        
    )
}