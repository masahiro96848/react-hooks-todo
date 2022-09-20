import React from "react";

export const TodoItem = (props) => {
    const { todos, handleEditClick, handleDelete } = props
    return (
        <section className="container-area">
            <ul className="list-row">
                {todos.map((todo) => {
                    return (
                    <li key={todo.id} className="list" >{todo.text}
                        <i onClick={() => handleEditClick(todo)} className="fas fa-pen-square fa-lg"></i>
                        <i onClick={() => handleDelete(todo.id)} className="fa fa-trash fa-lg" aria-hidden="true"></i>
                    </li>
                    )
                })}
            </ul>
        </section>
    )
}