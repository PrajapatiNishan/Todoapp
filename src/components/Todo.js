import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, togglecomplete, deletTodo, editTodo}) => {
  return (
    <div className='Todo'>
        <p  onclick={() => togglecomplete(task.id)} className={`${task.completed  ? 'completed': ""}`}>{task.task}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
            <FontAwesomeIcon icon={faTrash }  onClick={() => deletTodo(task.id)}/>
        </div>
    </div>
  )
}
