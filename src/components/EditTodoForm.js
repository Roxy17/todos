import React, { useState } from 'react'

export const EditTodoForm = ({
    task,
    HandleAddEditedTask,
    HandleTaskRemove,
}) => {
    const [editInputValue, setEditInputValue] = useState(task.title)

    const HandleInputChange = e => {
        setEditInputValue(e.target.value)
    }

    const HandleFormSubmit = e => {
        e.preventDefault()

        if (editInputValue.trim() !== '') {
            HandleAddEditedTask(editInputValue, task.id)
        } else {
            HandleTaskRemove(task.id)
        }
    }

    return (
        <form className="TodoForm" onSubmit={HandleFormSubmit}>
            <input
                type="text"
                className="todo-input"
                value={editInputValue}
                onChange={HandleInputChange}
            />
            <button className="todo-btn" type="submit">
                Edit task
            </button>
        </form>
    )
}
