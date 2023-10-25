
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Todo = ({
    task,
    HandleTaskRemove,
    HandleToggleComplete,
    HandleEditTask
}) => {
  return (
           <div className='Todo'>
        <p
            className={`${task.completed ? 'completed' : ''}`}
            onClick={() => HandleToggleComplete(task.id)}
        >
            {task.title}
        </p>
        <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={() => HandleEditTask(task.id)}
        />
        <FontAwesomeIcon
            icon={faTrash}
            onClick={() => HandleTaskRemove(task.id)}
        />
    </div> 
  )
}
