import React, { useState } from "react";

export const Capturar = (props) => {
    const [nombre, setNombre] = useState('');
    const [apellidoPat, setApellidoPat] = useState('');
    const [apellidoMat, setApellidoMat] = useState('');
    const [fechaIngreso, setFecha] = useState('');
    const [horaIngreso, setHora] = useState('');
    const [delitoDetenido, setDelito] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nombre);
    }

    return (

        <div className="contenedor-principal">
            
            <h1>SECCIÓN DE CAPTURA</h1>
            <h2>POR FAVOR CAPTURE DATOS DEL DETENIDO</h2>
            <form className="formulario-captura" onSubmit={handleSubmit}>
                
                <label htmlFor="nombre">Nombre: </label>
                <input value={nombre} onChange={(e) => setNombre(e.target.value)}type="text" placeholder="Nombre" id="nombre" name="nombre" />
                <label htmlFor="apellido-pat">Apellido Paterno: </label>
                <input value={apellidoPat} onChange={(e) => setApellidoPat(e.target.value)} type="text" placeholder="Apellido Paterno" id="apellido-pat" name="apellido-pat" />
                <label htmlFor="apellido-mat">Apellido Materno: </label>
                <input value={apellidoMat} onChange={(e) => setApellidoMat(e.target.value)} type="text" placeholder="Apellido Materno" id="apellido-mat" name="apellido-mat" />

                
                
            </form>
            &nbsp;
            <form className="formulario-captura" onSubmit={handleSubmit}>
                <label htmlFor="fecha-ingreso">Fecha de Ingreso: </label>
                <input value={fechaIngreso} onChange={(e) => setFecha(e.target.value)}type="date" id="fecha-ingreso" name="fecha-ingreso" />
                <label htmlFor="hora-ingreso">Hora de ingreso: </label>
                <input value={horaIngreso} onChange={(e) => setHora(e.target.value)} type="time" placeholder="hh:mm" id="hora-ingreso" name="hora-ingreso" />
                <label htmlFor="delito">Delito: </label>
                <input value={delitoDetenido} onChange={(e) => setDelito(e.target.value)} type="text" placeholder="¿Delito del detenido?" id="delito" name="delito" />

                
               
            </form>
            &nbsp;
            {/*<button className="boton-enlace" onClick={() => props.onFormSwitch('register')}>Ir a administrador de usuarios</button>
            */}

<form className="formulario-captura" onSubmit={handleSubmit}>
                <label htmlFor="modulo">Módulo: </label>
                <select name="modulo" id="celda">
                    <option value="1">Módulo 1</option>
                    <option value="2">Módulo 2</option>
                    <option value="3">Módulo 3</option>
                    <option value="4">Módulo 4</option>
                    <option value="5">Módulo 5</option>

                </select>
                <label htmlFor="celda">Celda: </label>
                <select name="celda" id="celda">
                    <option value="1">Celda 1</option>
                    <option value="2">Celda 2</option>
                    <option value="3">Celda 3</option>
                    <option value="4">Celda 4</option>
                    <option value="5">Celda 5</option>
                    <option value="6">Celda 6</option>
                    <option value="7">Celda 7</option>
                    <option value="8">Celda 8</option>
                    <option value="9">Celda 9</option>
                    <option value="10">Celda 10</option>


                </select>
                <h1>CAPTURA DE LIBERTAD Y MÓDULO EN DESARROLLO</h1>
            </form>
            &nbsp;

            {<button type="submit">Guardar Cambios</button>}
            &nbsp;
            <footer>Versión 2.2</footer>
            
        </div>
        
    )
}
