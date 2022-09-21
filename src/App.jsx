import React, { useState} from "react";
import { TodoItem } from "./components/TodoItem";
import { AddTodo } from "./components/AddTodo";
import './index.css'

export const App = ()  => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([])

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
    const handleDelete = (id) => {
        const removeItem = todos.filter((todo) => {
            return todo.id !== id
        })

        setTodos(removeItem)
    }

    const handleEditClick = (id, value) => {
         const newTodos = todos.map((todo, index) => {
            if (index === id) {
                todo.text = value
            }
            return todo
        })
        setTodos(newTodos)
    }
    
    return (
        <>
            <div className="container">
                <h1 className="title">Todo List</h1>
                <section className="container-area">
                    <AddTodo 
                        todo={todo}
                        handleSubmit={handleSubmit}
                        handleAddTodo={handleAddTodo}
                    />
                </section>
                <TodoItem
                    todos={todos}
                    handleEditClick={handleEditClick}
                    handleDelete={handleDelete}
                />
            </div>
        </>
    )
}