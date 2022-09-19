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
        if (todo !== '') {
            setTodoList([{ id: `${todo}-${Date.now()}`, todo }, ...todoList]);
            setTodoList([...todoList, todo])
            setTodo('')
        } else {
            return
        }
    }
    const handleDelete = (index) => {
        const newTodos = [...todoList]
        newTodos.splice(index, 1)
        setTodoList(newTodos)
        
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
                    handleDelete={handleDelete}
                />
            </div>
        </>
    )
}