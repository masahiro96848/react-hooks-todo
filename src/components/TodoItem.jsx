import React from "react";

export const TodoItem = (props) => {
    const { todo, index, deleteTodo } = props
    return (
        <li className="list">
            <span className="item">{todo}</span>
            <i className="fas fa-pen-square fa-lg"></i>
            <i onClick={() => deleteTodo(index)} className="fa fa-trash fa-lg" aria-hidden="true"></i>
        </li>
    )
}