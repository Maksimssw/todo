import './CreateTask.css'
import {useState} from "react";

function CreateTask(props) {
 const[newTask, setNewTask] = useState('')
  const getTask = (event) => {
    event.preventDefault()
    if (newTask !== '') props.getNewTask(newTask)
    setNewTask('')
  }

  return (
    <section className='container create-task'>
      <h1 className='create-task__headline'>Daily To Do List</h1>
      <form
        className='create-task__form'
        onSubmit={getTask}
      >
        <input
          className='create-task__input'
          type='text'
          placeholder='Add new list item'
          value={newTask}
          onInput={(e) => setNewTask(e.target.value)}
        />
        <button
          className='create-task__button'
          value='Submit'
          type="submit"
        >
          Add
        </button>
      </form>
    </section>
  )
}

export default CreateTask