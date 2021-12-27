import React from 'react'

class ToDoForm extends React.Component{
     constructor(props) {
         super(props);
         this.state = {input: ''};
     }

    handleChange = (e) => {
        this.setState({input: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: this.state.input,
        });

        this.setState({input: ''});
    }

    render(){
        return (
            <form className='todo-form' onSubmit={this.handleSubmit}>
                <input className= 'todo-input'
                    type="text"
                    placeholder="Add a todo"
                    value={this.state.input}
                    onChange={this.handleChange}>
                </input>
                <button className='todo-button'>Add todo</button>
            </form>
        );
    }
}

export default ToDoForm
