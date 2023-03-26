import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Registrar } from "./Registrar";
import { Capturar } from "./Capturar";

function App() {
  const [formularioActual, setCurrentForm] = useState('login');
  const [formularioSecundario, setSecundario] = useState('capturar');

  const formDos = (nombreForm) => {
    setCurrentForm(nombreForm);
  }



  

  return (
    <div className="App">

      {
        formularioActual === "login" ? (<Login onFormSwitch={formDos}  />) : (<Capturar onFormSwitch={formDos} />)
      }
      
     
      
    </div>
  );
}

export default App;
