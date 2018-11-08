import React from 'react';

const todoForm = props => {
    return (
        <form>
            <input placeholder="task" onChange={props.handleTask} ></input>
            <button onClick= {props.handleAddTodo} > Add Todo </button>
        </form>)
}