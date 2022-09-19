import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = (props) => {
    const { todoList, handleDelete } = props
    return (
        <section className="container-area">
            <div>
                <ul className="list-row">
                    {todoList.map((todo, index) => {
                        return (
                        <li className="list" key={index}>
                            <TodoItem 
                                todo={todo}
                                index={index}
                                handleDelete={handleDelete}
                            />
                        </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}