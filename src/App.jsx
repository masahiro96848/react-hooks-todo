import React, { useState, useEffect} from "react";
import './index.css'

export const App = ()  => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([])
    const [isEditing, setIsEditing] = useState(false)
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
    const handleEditInputChange = (event) => {
        setCurrentTodo({ ...currentTodo, text: event.target.value })
        console.log(currentTodo)
    }
    const handleEditClick = (todo) => {
        setIsEditing(true)
        setCurrentTodo({ ...todo })
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
                            <h2>Edit Todo</h2>
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
                    <div>
                        <form action="" onSubmit={handleSubmit}>
                            <input
                                className="input-area" 
                                placeholder="Todoを追加" 
                                value={todo}
                                onChange={handleAddTodo}
                                type="text"
                            />
                        </form>
                    </div>
                    )}
                </section>
                <section className="container-area">
                    <div>
                        <ul className="list-row">
                            {todos.map((todo) => {
                                return (
                                <li key={todo.id} className="list" >{todo.text}
                                <i onClick={() => handleEditClick(todo)} className="fas fa-pen-square fa-lg"></i>
                                <i onClick={() => handleDelete(todo.id)} className="fa fa-trash fa-lg" aria-hidden="true"></i>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>
            </div>
        </>
    )
}