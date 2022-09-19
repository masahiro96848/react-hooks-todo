import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = (props) => {
    const { todoList, deleteTodo } = props
    return (
        <section className="container-area">
            <div>
                {todoList.map((todo, index) => {
                    return (
                        <ul key={todo} className="list-row">
                            <TodoItem 
                                todo={todo}
                                index={index}
                                deleteTodo={deleteTodo}
                            />
                        </ul>
                    )
                })}
            </div>
        </section>
    )
}