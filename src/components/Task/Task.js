import './Task.css'
import arrow from '../../static/icons/close.svg'
import {useEffect, useState} from "react";
import NoTask from "../NoTask/NoTask";

function Task(props) {
  const{allTasks} = props
  const[tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(allTasks)
  }, [allTasks])

  const todo = tasks.length === 0 ? <NoTask/> : <Todo tasks={tasks}/>

  return (
    <section className='task container'>
      <ul className='task__list'>
        {todo}
      </ul>
    </section>
  )
}

function Todo(props) {
  const{tasks} = props

  return (
    (
      tasks.map((task, index) =>
        <li
          key={index}
          className='task__item grid-row justify-content-start'
        >
          <div className="task__circle"></div>
          <p className='task__text'>{task}</p>
          <img
            className='task__close icon-24'
            src={arrow}
            alt=''
          />
        </li>
      )
    )
  )
}

export default Task