import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from './Tarea';

function ListaDeTareas() {

  const [tareas, setTareas] = useState([{ texto: 'nueva tarea', completada: true }]);

  const agregarTarea = tarea => {
    if(tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = tarea => {
    setTareas(tareas.filter(t => t !== tarea));
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) =>
            <Tarea texto={tarea.texto} completada={tarea.completada} />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;