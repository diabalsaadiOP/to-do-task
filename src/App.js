import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

class App extends React.Component {
  render() {
    return (
      <div className='todo-app'>
        <ToDoList />
      </div>
    );
  }
}

export default App;
