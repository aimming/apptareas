import React from "react";
import '../styles/Tarea.css'
import { AiOutlineDelete } from "react-icons/ai";

function Tarea({id, texto, completada, completarTarea, eliminarTarea}) {
    return(
        <div className={completada ? 'tareaContenedor completada' : 'tareaContenedor'}>
            <div 
            className="tareaTexto"
            onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div 
            className="tareaContenedorIcono"
            onClick={() => eliminarTarea(id)}>
                <AiOutlineDelete className="tareaIcono"/>
            </div>
        </div>
    )
}

export default Tarea;