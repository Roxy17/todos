import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { v4 } from 'uuid'
import { Todo } from './Todo'
import { EditTodoForm } from './EditTodoForm'

export const TodoWrapper = () => {
    const [tasks, setTasks] = useState([])

    const addTodo = value => {
        const newTask = [
            ...tasks,
            {
                id: v4(),
                title: value,
                isEditing: false,
                complited: false,
            },
        ]
        setTasks(newTask)
    }

    const HandleTaskRemove = id => {
        const filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks)
    }

    const HandleToggleComplete = id => {
        const mapedTasks = tasks.map(task =>
            task.id === id
                ? {
                      ...task,
                      completed: !task.completed,
                  }
                : task,
        )

        setTasks(mapedTasks)
    }

    const HandleEditTask = id => {
        const mapedTasks = tasks.map(task =>
            task.id === id
                ? {
                      ...task,
                      isEditing: !task.isEditing,
                  }
                : task,
        )

        setTasks(mapedTasks)
    }

    const HandleAddEditedTask = (taskValue, id) => {
        const mapedTasks = tasks.map(task =>
            task.id === id
                ? {
                      ...task,
                      title: taskValue,
                      isEditing: !task.isEditing,
                  }
                : task,
        )
        setTasks(mapedTasks)
    }

    return (
        <div className="TodoWrapper">
            <h1>Get Things Done!</h1>
            <TodoForm addTodo={addTodo} />
            {tasks.map((task, index) =>
                task.isEditing ? (
                    <EditTodoForm
                        task={task}
                        key={index}
                        HandleAddEditedTask={HandleAddEditedTask}
                        HandleTaskRemove={HandleTaskRemove}
                    />
                ) : (
                    <Todo
                        task={task}
                        key={index}
                        HandleTaskRemove={HandleTaskRemove}
                        HandleToggleComplete={HandleToggleComplete}
                        HandleEditTask={HandleEditTask}
                    />
                ),
            )}
        </div>
    )
}
