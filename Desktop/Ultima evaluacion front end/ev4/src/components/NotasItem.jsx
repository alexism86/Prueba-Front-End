import React from "react";

/* debo recibir los props */
export function NotasItem({ todo, cambiarEstado }) {
  const { id, task, completed } = todo;
  const fnCambiarEstado = () => {
    cambiarEstado(id)
  }
  return (    
    
      
    <li>
          <a href="#">
            <h2 >Tarea 1</h2>
            <p>
         
    
      <input type="checkbox" 
      onChange={fnCambiarEstado}
      className="form-check-input me-2" checked={completed}/>
      {task}
      </p>
      </a>
    </li>
  );
}