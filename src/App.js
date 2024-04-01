import { useEffect, useState } from 'react';
import { MyTasks } from "./MyTasks";
import { getAllTasks, addTask, editTask, deleteTask } from './FetchTasks';
import checkmark from './assets/checkmark.png';
import { IoSendSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";


function App() {
  const [myTask, setTask] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [taskId, setTaskId] = useState("");

  useEffect(() => {
    getAllTasks(setTask)
  }, [])

  const updatingInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setTaskId(_id)
  }

  return (
    <div className="main-box">
      <div className="start heading">
        <img src={checkmark} alt="checkmark" className="checkmark" />
        <h1>To Do List</h1>
      </div>

      <div className="input-box">
      <input
        type="text"
        placeholder="Enter a task"
        value={ title }
        onChange={(e) => setTitle(e.target.value)}
      />

      <button className="btn" 
      disabled = {!title}
      onClick =
      {editing ? () => editTask(taskId, title, setTitle, setTask, setEditing) : () => addTask(title, setTitle, setTask)}>
        {editing ? <IoSendSharp className="inputBtn" /> : <FaPlus className="inputBtn" />}
      </button>
      </div>

      {myTask.map((task) => <MyTasks 
      addText={ task.title }
      key={ task._id }
      updatingInput = {() => updatingInput(task._id, task.title)}
      deleteTask = {() => deleteTask(task._id, setTask)}
      />
      )}
    </div>
  );
}

export default App;
