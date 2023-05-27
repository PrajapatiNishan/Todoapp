import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)
    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id)
        setValue("")
    }
  return (
    <form className='TodoFrom' onSubmit={handleSubmit}>
        <input type='text' className='Todo-input' value={value} placeholder='Update task' onChange={(e) => setValue(e.target.value)}></input>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
