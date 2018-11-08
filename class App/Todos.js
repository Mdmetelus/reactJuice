import React from 'react';
import Todo from './Todo';

const Todos = props => {
    return (
        <div>
            {props.todos.map(blah => <Todo data={blah}/>)}
        </div>
    )
}

export default Todos;