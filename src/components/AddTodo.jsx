import React from 'react'
import { InputForm } from './InputForm'

export const AddTodo = (props) => {
    const { addInputValue, handleAddTodo, handleSubmit } = props
    return (
        <form action="" onSubmit={handleSubmit}>
            <InputForm
                inputValue={addInputValue}
                handleChangeValue={handleAddTodo}
                placeholder={'Todoを追加'}
            />
        </form>
    )
}
