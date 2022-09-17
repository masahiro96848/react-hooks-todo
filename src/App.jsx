import React from "react";
import './index.css'

export const App = () => {
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
                        <ul className="list-row">
                            <li className="list">
                                <span className="item">テスト1</span>
                                <i className="fa fa-trash" aria-hidden="true"></i>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-row">
                            <li className="list">
                                <span className="item">テスト2</span>
                                <i className="fa fa-trash" aria-hidden="true"></i>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    )
}