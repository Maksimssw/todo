import CreateTask from "../CreateTask/CreateTask";
import Task from "../Task/Task";
import Footer from "../Footer/Footer";
import {useCallback, useState} from "react";

function App() {
  const[task, setTask] = useState([])

  const getNewTask = (text) => setTask([...task, text])
  const allClear = () => setTask([])
  const deletTask = (i) => setTask(task.filter((el, index) =>  index !== i))

  return (
    <>
      <main>
        <CreateTask getNewTask={getNewTask} />
        <Task allTasks={task} deletTask={deletTask}/>
      </main>
      <Footer
        countTasks={task.length}
        allClear={allClear}
      />
    </>
  );
}

export default App;
