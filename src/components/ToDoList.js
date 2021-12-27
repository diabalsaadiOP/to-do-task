import React from 'react'
import ToDo from './ToDo';
import ToDoForm from './ToDoForm'

class ToDoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {todoList: []};
    }

    addTodo = (e) => {
        if (!e.text || /^\s*$/.test(e.text)) {
            return;
        }
        this.setState({todoList: [e, ...this.state.todoList]});
    }

    completeTodo = (id) => {
        let updateToDoList = this.state.todoList.map((todo) => {
            if(todo.id === id)
                todo.isComplete = !todo.isComplete
            return todo;
        });
        this.setState({todoList: updateToDoList});
    }

    deleteToDo = (id) => {
        let updateToDoList = [];
        this.state.todoList.filter((todo) => {
            if(todo.id !== id)
                updateToDoList.push(todo);
        });
        this.setState({todoList: updateToDoList});
    }

    render(){
        return (
            <div>
                <ToDoForm onSubmit={this.addTodo} />
                <div className='items-to-list'>
                <ToDo todoList={this.state.todoList} completeTodo={this.completeTodo} deleteToDo={this.deleteToDo} />
                </div>
            </div>
        )
    }
}

export default ToDoList
