import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value)
        setValue("")
    }
  return (
    <form className='TodoFrom' onSubmit={handleSubmit}>
        <input type='text' className='Todo-input' value={value} placeholder='What is the task today ?' onChange={(e) => setValue(e.target.value)}></input>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
