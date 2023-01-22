import React, { useState, useMemo } from 'react'
import { InputForm } from './components/InputForm'
import { TodoItem } from './components/TodoItem'
import { AddTodo } from './components/AddTodo'
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from './constants/data'
import './index.css'

export const App = () => {
    const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST)
    const [addInputValue, setAddInputValue] = useState('')
    const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID)
    const [searchKeyword, setSearchKeyword] = useState('')
    const showTodoList = useMemo(() => {
        return originTodoList.filter((todo) => {
            // 検索キーワードに部分一致したTodoだけを一覧表示する
            const regexp = new RegExp('^' + searchKeyword, 'i')
            return todo.text.match(regexp)
        })
    }, [originTodoList, searchKeyword])

    // addInputValueの変更処理
    const onChangeAddInputValue = (e) => setAddInputValue(e.target.value)
    // Todoの新規登録処理
    const handleAddTodo = (e) => {
        e.preventDefault()
        if (addInputValue !== '') {
            const newUniqueId = uniqueId + 1
            // スプレッド構文処理
            const newTodoList = [
                ...originTodoList,
                {
                    id: newUniqueId,
                    text: addInputValue,
                },
            ]
            setOriginTodoList(newTodoList)

            // 採番IDを更新
            setUniqueId(newUniqueId)
            // todo追加後、入力値をリセット
            setAddInputValue('')
        }
    }

    const handleDeleteTodo = (targetId, targetTitle) => {
        const newTodoList = originTodoList.filter(
            (todo) => todo.id !== targetId
        )

        // todoを削除したtodo listで更新
        setOriginTodoList(newTodoList)
    }

    /** キーワード検索処理 */
    const handleChangeSearchKeyword = (e) => setSearchKeyword(e.target.value)

    return (
        <>
            <div className="container">
                <h1 className="title">Todo List</h1>
                <section className="container-area">
                    <AddTodo
                        addInputValue={addInputValue}
                        handleAddTodo={onChangeAddInputValue}
                        handleSubmit={handleAddTodo}
                    />
                </section>
                {/* Todo検索フォームエリア */}
                <section className="container-area">
                    <InputForm
                        inputValue={searchKeyword}
                        placeholder={'キーワード検索'}
                        handleChangeValue={handleChangeSearchKeyword}
                    />
                </section>
                <TodoItem
                    todos={showTodoList}
                    handleDelete={handleDeleteTodo}
                />
            </div>
        </>
    )
}
