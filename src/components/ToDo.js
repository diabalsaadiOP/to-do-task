import React from 'react'
import {BsTrash} from 'react-icons/bs'


class ToDo extends React.Component {
    render(){
        return this.props.todoList.map((todo, index) => {
            console.log(todo);
            return (<div className={todo.isComplete ? 'to-do-task-complete': 'to-do-task'} key={index}>
                <input type='checkbox' onClick={() => this.props.completeTodo(todo.id)}></input>
                <div>
                    {todo.text}
                </div>
                <BsTrash onClick={() => this.props.deleteToDo(todo.id)}/>
            </div>)
        });
    }
}

export default ToDo
