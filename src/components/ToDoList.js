import React, { useState } from 'react'
import ToDo from './ToDo';
import ToDoForm from './ToDoForm'

const ToDoList = () => {
    const [todoList, setTodoList] = useState([]);

    const addTodo = (e) => {
        if (!e.text || /^\s*$/.test(e.text)) {
            return;
        }
        setTodoList([e, ...todoList]);
    }

    const completeTodo = (id) => {
        let updateToDoList = todoList.map((todo) => {
            if (todo.id === id)
                todo.isComplete = !todo.isComplete
            return todo;
        });
        setTodoList(updateToDoList);
    }

    const deleteToDo = (id) => {
        let updateToDoList = todoList.filter((todo) => {
            return todo.id !== id;
        });
        setTodoList(updateToDoList);
    }

    return (
        <div>
            <ToDoForm onSubmit={addTodo} />
            <div className='items-to-list'>
                <ToDo todoList={todoList} completeTodo={completeTodo} deleteToDo={deleteToDo} />
            </div>
        </div>
    )
}

export default ToDoList
