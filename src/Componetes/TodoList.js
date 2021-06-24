import React from 'react';
import Apunte from './Apunte';

const TodoList =({todo})=>{  
    return(
        <div className='Koana-Contenido-total wrapper'>
            <ul className="todo-list">
                {todo.map(todo=>(
                   <Apunte 
                   titulo={todo.titulo}
                   descripcion={todo.descripcion}
                   etiquetas={todo.etiquetas}
                    /> 
                ))}
            </ul>     
        </div>
    );
}

export default TodoList;