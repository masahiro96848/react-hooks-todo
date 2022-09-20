import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = (props) => {
    const { todoList, handleDelete } = props
    return (
        <section className="container-area">
            <div>
                <ul className="list-row">
                    {todoList.map((todo) => {
                        return (
                        <li key={todo.id} className="list" >
                            <TodoItem 
                                todo={todo.text}
                                
                            />
                        </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}