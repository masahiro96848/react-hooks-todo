import React from "react";

export const AddTodo = (props) => {
    const { todo, handleSubmit, handleAddTodo} = props
    return (
        <form action="" onSubmit={handleSubmit}>
            <input
                className="input-area" 
                placeholder="Todoを追加" 
                value={todo}
                onChange={handleAddTodo}
                type="text"
            />
        </form>
    )
}