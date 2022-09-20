import React, { useState, useEffect} from "react";
import { AddTodo } from "./components/AddTodo";
import './index.css'

export const App = ()  => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([])
    const [editTodo, setEditTodo] = useState(false)
    const [currentTodo, setCurrentTodo] = useState({})

    const handleAddTodo = (event) => {
        setTodo(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (todo !== '') {
            setTodos([...todos, { id: new Date(), text: todo.trim()}]);
            setTodo('')
        } else {
            return
        }
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
                    <ul className="list-row">
                        {todos.map((todo) => {
                            return (
                            <li key={todo.id} className="list" >{todo.text}</li>
                            )
                        })}
                    </ul>
                </div>
            </section>
            </div>
        </>
    )
}