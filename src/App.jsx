import React, { useState } from "react";
import './index.css'

export const App = () => {
    const [todo, setTodo] = useState(['カフェに行く', '筋トレをする'])
    return (
        <>
            <div className="container">
                <h1 className="title">Todo List</h1>
                <section className="container-area">
                    <div>
                        <input className="input-area" placeholder="Todoを追加" type="text" />
                    </div>
                </section>
                <section className="container-area">
                    <div>
                        <input className="input-area" placeholder="キーワードを検索" type="text" />
                    </div>
                </section>
                <section className="container-area">
                    <div>
                        {todo.map((todo) => {
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