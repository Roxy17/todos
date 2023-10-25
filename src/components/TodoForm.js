import React, { useState } from 'react'

export const TodoForm = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('')

    const HandleInputChange = e => {
        setInputValue(e.target.value)
    }

    const HandleFormSubmit = e => {
        e.preventDefault()

        if (inputValue.trim() !== '') {
            addTodo(inputValue)
            setInputValue('')
        }
        return
    }

    return (
        <form className="TodoForm" onSubmit={HandleFormSubmit}>
            <input
                type="text"
                className="todo-input"
                value={inputValue}
                onChange={HandleInputChange}
            />
            <button className="todo-btn" type="submit">
                Add task
            </button>
        </form>
    )
}
