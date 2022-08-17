import React from "react";
import '../hojas-de-estilo/Tarea.css';

function Tarea({ texto }) {
  <div className='tarea-contenedor'>
    <div className='tarea-texto'>
      {texto}
    </div>
    <div className='tarea-icono'>
      Eliminar
    </div>
  </div>
};

export default Tarea;