import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import '../hojas-de-estilo/ListaDeTareas.css';

function ListaDeTareas() {

  const [tareas, setTareas] = useStates([]);

  return (
    <>
      <TareaFormulario />
      <div className='tareas-lista-contenedor'>
        LISTA DE TAREAS
      </div>
    </>
  );
}

export default ListaDeTareas;