import React from 'react'
import './checkbox.css'


function Todo({text, todo, todos, setTodos}) {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div className="todo">
            <label className='custom' >
                <input type="checkbox" onChange={completeHandler}/>
                <span className="checkmark"></span>
            </label>
            <li className={`todo-item ${todo.completed ? "completed": ''}`}>{text}</li>
            <img src="./images/icon-cross.svg" onClick={deleteHandler} className="delete-btn" alt=''/>
        </div>
    )
}

export default Todo
