import React from "react";

export const TodoItem = (props) => {
    const { todo, handleDelete } = props
    return (
        <div className="list-item">   
            <span className="item">{todo}</span>
            <i className="fas fa-pen-square fa-lg"></i>
            <i onClick={() => handleDelete(todo)} className="fa fa-trash fa-lg" aria-hidden="true"></i>
        </div>
        
    )
}