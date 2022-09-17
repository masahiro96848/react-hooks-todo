import React, { useState } from "react";
import './index.css'

export const App = () => {
    const [task, setTask] = useState('')
    const [todos, setTodos] = useState(['カフェに行く', '筋トレをする'])

    const handleNewTask = (event) => {
        setTask(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (task === '') return
        setTodos(todos => [...todos, task])
        setTask('')
    }
    return (
        <>
            <div className="container">
                <h1 className="title">Todo List</h1>
                <section className="container-area">
                    <div>
                        <form action="" onSubmit={handleSubmit}>
                            <input 
                                className="input-area" 
                                placeholder="Todoを追加" 
                                value={task}
                                onChange={handleNewTask}
                                type="text"
                            />
                        </form>
                    </div>
                </section>
                <section className="container-area">
                    <div>
                        <input className="input-area" placeholder="キーワードを検索" type="text" />
                    </div>
                </section>
                <section className="container-area">
                    <div>
                        {todos.map((todo) => {
                            return (
                                <ul key={todo} className="list-row">
                                    <li className="list">
                                        <span className="item">{todo}</span>
                                        <i className="fa fa-trash" aria-hidden="true"></i>
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