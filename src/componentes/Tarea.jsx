import React from "react";
import '../hojas-de-estilo/Tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Tarea({ texto }) {
  return (
    <div className='tarea-contenedor'>
      <div className='tarea-texto'>
        {texto}
      </div>
      <div className='tarea-contenedor-icono'>
        <AiOutlineCloseCircle className="tarea-icono" />
      </div>
    </div>
  );
};

export default Tarea;