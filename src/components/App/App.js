import CreateTask from "../CreateTask/CreateTask";
import Task from "../Task/Task";
import Footer from "../Footer/Footer";
import {useState} from "react";

function App() {
  const[task, setTask] = useState([])

  const getNewTask = (text) => setTask([...task, text])
  const allClear = () => setTask([])

  return (
    <>
      <main>
        <CreateTask getNewTask={getNewTask} />
        <Task allTasks={task}/>
      </main>
      <Footer
        countTasks={task.length}
        allClear={allClear}
      />
    </>
  );
}

export default App;
