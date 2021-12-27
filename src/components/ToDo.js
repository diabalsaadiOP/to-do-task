import React from 'react'
import { BsTrash } from 'react-icons/bs'


const ToDo = ({ todoList, completeTodo, deleteToDo }) =>
    todoList.map((todo, index) => {
        return (<div className={todo.isComplete ? 'to-do-task-complete' : 'to-do-task'} key={index}>
            <input type='checkbox' onClick={() => completeTodo(todo.id)}></input>
            <div>
                {todo.text}
            </div>
            <BsTrash onClick={() => deleteToDo(todo.id)} />
        </div>)
    });


export default ToDo;
