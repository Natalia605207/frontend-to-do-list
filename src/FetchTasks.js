import axios from "axios";
const getAllTasks = (setTask) => {
    axios.get("https://backend-to-do-list-h4bd.onrender.com")
    .then(({ data }) => { console.log(data)
    setTask(data)
    })
}

const addTask = (title, setTitle, setTask) => {
    axios.post("https://backend-to-do-list-h4bd.onrender.com/saveTasks", { title })
    .then((data) => {
        console.log(data)
        setTitle("")
        getAllTasks(setTask)
    })
}

const editTask = (taskId, title, setTitle, setTask, setEditing) => {
    axios.post("https://backend-to-do-list-h4bd.onrender.com/editTask", { _id:taskId, title })
    .then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllTasks(setTask)
    })
}

const deleteTask = (_id, setTask) => {
    axios.post("https://backend-to-do-list-h4bd.onrender.com/deleteTask", { _id })
    .then((data) => {
        console.log(data)
        getAllTasks(setTask)
    })
}

export { getAllTasks, addTask, editTask, deleteTask };