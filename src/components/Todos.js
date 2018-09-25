import React from 'react';
import '../css/Todos.css';

const Todos = (props) => {

    const todos = props.todos.length ? (
        props.todos.map((todo) => <li className="collection-item todo-item" key={todo.id} onClick={() => {props.deleteTodo(todo.id)}}>Name : {todo.name} Descrition: {todo.text}</li>)
    ): <li className="collection-item">No todos for today</li>

    return (
        <ul className={'center collection'}>
            {todos}
        </ul>
    )
}

export default Todos;