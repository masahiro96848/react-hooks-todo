import React from "react";

export const TodoItem = (props) => {
    const { todo, index, deleteTodo } = props
    return (
        <li className="list">
            <span className="item">{todo}</span>
            <i onClick={() => deleteTodo(index)} className="fa fa-trash" aria-hidden="true"></i>
        </li>
    )
}