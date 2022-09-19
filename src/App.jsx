import React, { useState } from "react";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

import './index.css'

export const App = () => {
    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState(['テスト1', 'テスト2'])

    const handleAddTodo = (event) => {
        setTodo(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (todo === '') return
        setTodoList([...todoList, todo])
        setTodo('')
    }
    const deleteTodo = (index) => {
        const todo = [...todoList]
        todo.splice(index, 1)
        setTodoList(todo)
    }
    return (
        <>
            <div className="container">
                <h1 className="title">Todo List</h1>
                <AddTodo
                    todo={todo}
                    handleAddTodo={handleAddTodo}
                    handleSubmit={handleSubmit}
                />
                <section className="container-area">
                    <div>
                        <input className="input-area" placeholder="キーワードを検索" type="text" />
                    </div>
                </section>
                <TodoList
                    todoList={todoList}
                    deleteTodo={deleteTodo}
                />
            </div>
        </>
    )
}