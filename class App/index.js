import React from 'react';
import ReactDom from 'react-dom';
import Todos from './Todos';
import TodoForm from './TodoForm';

import './styles.css';
class App extends React.Component {
    constructor () {
        super();
        this.state = {
            todos: [{ task: "Clean Bathroom", id: Date.now(), completed: false }],
            task:'',
        };
    }

    handleTaskChange = e => {
        this.setState({ task: e.target.value});
    };

    handleAddtodoSubmit= (e) =>{
        e.preventDefault();
        const todos = this.state.todos.slice();
        todos.push({task: this.state.task, id: Date.now(), completed: false});
        this.setState({todos: todos});
    };

    render(){
        return(
            <div className="App">
                <h1>Hello</h1>
                <todos todos= {this.state. todos} />
                <TodoForm 
                handleAddTodo={this.handleAddTodoSubmit}
                handle task={this.handleTaskChange} />
            


            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDom.render(App />, rootElement);