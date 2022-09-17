import React, { useState } from "react";
import { AddTodo } from "./components/AddTodo";
import './index.css'

export const App = () => {
    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState(['カフェに行く', '筋トレをする'])

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
            </div>
        </>
    )
}