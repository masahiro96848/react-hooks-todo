import React from "react";

export const TodoList = (props) => {
    const { todoList, deleteTodo } = props
    return (
        <section className="container-area">
            <div>
                {todoList.map((todo, index) => {
                    return (
                        <ul key={todo} className="list-row">
                            <li className="list">
                                <span className="item">{todo}</span>
                                <i onClick={() => deleteTodo(index)} className="fa fa-trash" aria-hidden="true"></i>
                            </li>
                        </ul>
                    )
                })}
            </div>
        </section>
    )
}