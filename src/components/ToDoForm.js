import React, { useState } from 'react'

const ToDoForm = ({ onSubmit }) => {
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input,
        });

        setInput('');
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input className='todo-input'
                type="text"
                placeholder="Add a todo"
                value={input}
                onChange={handleChange}>
            </input>
            <button className='todo-button'>Add todo</button>
        </form>
    );
}

export default ToDoForm
