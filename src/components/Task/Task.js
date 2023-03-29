import './Task.css'
import arrowSvg from '../../static/icons/close.svg'
import doneSvg from '../../static/icons/done.svg'
import {useEffect, useState} from 'react';
import NoTask from '../NoTask/NoTask';

function Task(props) {
  const{allTasks, deletTask} = props
  const[tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(allTasks)
  }, [allTasks])

  const todo = tasks.length === 0 ? <NoTask/> : <Todo tasks={tasks} deletTask={deletTask}/>

  return (
    <section className='task container'>
      <ul className='task__list'>
        {todo}
      </ul>
    </section>
  )
}

function Todo(props) {
  const{tasks, deletTask} = props
  const doneTask = (event) => {
    if (event.target.classList.contains('task__close')) return
    const item = event.target.closest('.task__item')
    item.classList.toggle('task__item_done')
  }

  return (
    (
      tasks.map((task, index) =>
        <li
          key={index}
          className='task__item grid-row justify-content-start'
          onClick={doneTask}
        >
          <div className='task__circle'>
            <img
              className='task__done icon-16'
              src={doneSvg}
              alt=''
            />
          </div>
          <p className='task__text'>{task}</p>
          <img
            className='task__close icon-24'
            src={arrowSvg}
            alt=''
            onClick={() => deletTask(index)}
          />
        </li>
      )
    )
  )
}

export default Task