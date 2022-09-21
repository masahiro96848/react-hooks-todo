import React from "react";

export const TodoItem = (props) => {
    const { todos, handleEditClick, handleDelete } = props
    return (
        <section className="container-area">
            <ul className="list-row">
                {todos.map((todo, index) => {
                    return (
                    <li key={todo.id} className="list" >
                        <input 
                            className="edit-input" 
                            type="text" 
                            value={todo.text} 
                            onChange={(event) => handleEditClick(index , event.target.value)}
                        />
                        <i onClick={() => handleDelete(todo.id)} className="fa fa-trash fa-lg" aria-hidden="true"></i>
                    </li>
                    )
                })}
            </ul>
        </section>
    )
}