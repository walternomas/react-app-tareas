import React, { useState } from 'react';
import '../hojas-de-estilo/TareaFormulario.css';

function TareaFormulario(props) {

  const [input, setInput] = setState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  };

  const manejarEnvio = e => {
    const tareaNueva = {
      id: '4654',
      texto: 'Tarea'
    }
  };

  return (
    <form className='tarea-formulario'>
      <input 
        type="text" 
        className='tarea-input' 
        placeholder='Escribe una Tarea' 
        name='texto'
        onChange={manejarCambio} 
      />
      <button className='tarea-boton'>Agregar Tarea</button>
    </form>
  );
}

export default TareaFormulario;
