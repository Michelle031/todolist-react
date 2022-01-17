import React from 'react';

function TodoForm({setInput, todos, setTodos,input}) {
    
    const handleChange = e => {
        setInput(e.target.value);
    }


    const handleKeyPress = e => {
        if(e.key === 'Enter') {
            e.preventDefault();
        setTodos([...todos, {
            text: input,
            completed: false,
            id: Math.random() * 10000
        }])
        setInput('');
        }
    }
    return (
        <form className="todo-form" onSubmit={handleKeyPress}>
            <input type="text" placeholder="Add a todo" value={input} name="text" className="todo-input"
            onChange={handleChange}  onKeyPress={handleKeyPress}/>
        </form>
    )
}

export default TodoForm
