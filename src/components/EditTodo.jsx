import React from "react";

export const EditTodo = (props) => {
    const {currentTodo, setIsEditing, handleEditFormSubmit, handleEditInputChange} = props
    return (
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
    )
}