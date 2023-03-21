import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Registrar } from "./Registrar";

function App() {
  const [formularioActual, setCurrentForm] = useState('login');

  const formDos = (nombreForm) => {
    setCurrentForm(nombreForm);
  }

  return (
    <div className="App">
      {
        formularioActual === "login" ? <Login onFormSwitch={formDos} /> : <Registrar onFormSwitch={formDos} />
      }
      
    </div>
  );
}

export default App;
