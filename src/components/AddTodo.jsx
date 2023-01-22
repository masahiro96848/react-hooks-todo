import React from 'react'

export const AddTodo = (props) => {
    const { addInputValue, handleAddTodo, handleSubmit } = props
    return (
        <form action="" onSubmit={handleSubmit}>
            <input
                className="input-area"
                placeholder="Todoを追加"
                value={addInputValue}
                onChange={handleAddTodo}
                type="text"
            />
        </form>
    )
}
