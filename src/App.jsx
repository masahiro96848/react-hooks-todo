import React, { useState} from "react";
import { TodoItem } from "./components/TodoItem";
import { AddTodo } from "./components/AddTodo";
import './index.css'

export const App = ()  => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [editId, setEditId] = useState(0)
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
    const handleDelete = (id) => {
        const removeItem = todos.filter((todo) => {
            return todo.id !== id
        })

        setTodos(removeItem)
    }

    const handleEdit = (id, value) => {
        const newTodos = todos.map((todo, index) => {
            if (index === id) {
                todo.text = value
            }
            return todo
        })
        setTodos(newTodos)
    }

    const handleEditInputChange = (event) => {
        setCurrentTodo({ ...currentTodo, text: event.target.value })
        console.log(currentTodo)
    }

    const handleEditTodo = (event) => {
        if (event.key === 'Enter' && todo !== "") {
            setTodo(event.target.value)
        }
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
    const handleUpdateTodo = (id, updateTodo) => {
        const updateItem = todos.map((todo) => {
            return todo.id === id ? updateTodo : todo;
        })
        setIsEditing(false)
        setTodos(updateItem)
    }
    const handleEditFormSubmit = (event) => {
        event.preventDefault()

        handleUpdateTodo(currentTodo.id, currentTodo)
    }
    
    return (
        <>
            <div className="container">
                <h1 className="title">Todo List</h1>
                <section className="container-area">
                    {isEditing ? (
                        <form onSubmit={handleEditFormSubmit}>
                            <input 
                                type="text" 
                                name="editTodo"
                                placeholder="Edit todo"
                                value={currentTodo.text}
                                onChange={handleEditInputChange}
                            />
                            <button type="submit">更新</button>
                            <button onClick={() => setIsEditing(false)}>キャンセル</button>
                        </form>
                    ): (
                    <AddTodo 
                        todo={todo}
                        handleSubmit={handleSubmit}
                        handleAddTodo={handleAddTodo}
                    />
                    )}
                </section>
                <TodoItem
                    todos={todos}
                    handleEditClick={handleEditClick}
                    handleEditTodo={handleEditTodo}
                    handleDelete={handleDelete}
                />
            </div>
        </>
    )
}