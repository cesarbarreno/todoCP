import React, { useState } from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoForm.css';

function TodoForm () {
    const [newTodoValue, setNewTodoValue] = useState('');
    
    const {        
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {        
        setOpenModal(false);
    };

    const onChange = (event) => {        
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>
                Escribe tu nuevo TODO
            </label>
            <textarea 
                placeholder='Cortar cebolla para el almuerzo'
                value={newTodoValue}
                onChange={onChange}
            />
            <div className='TodoForm-buttonContainer'>
                <button 
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button 
                    type='submit'
                    className='TodoForm-button TodoForm-button--add'                     
                >
                    Guardar
                </button>
            </div>
        </form>
    )
}

export { TodoForm }