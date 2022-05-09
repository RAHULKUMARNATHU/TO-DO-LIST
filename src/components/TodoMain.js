import React, {useState} from 'react'
import TodoList from './TodoList';

function TodoMain() {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const onTaskChange = (event) => {
    setTask(event.target.value)
  }
  const addTask = () => {
    setTaskArray((prevTasks) => {
      return [...prevTasks, task]
    })
    setTask("")
  }

  const deleteItem = (id) => {
    console.log(id, 'to be deleted')
    setTaskArray((prevTasks) => {
      return prevTasks.filter((arrele, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div>
      <h1>My Todo List</h1> 
      <br />
      <input type="text" value={task} placeholder="Enter a task" onChange={onTaskChange} />
      <button onClick={addTask}>Add</button>
      <ol> {taskArray.map((val, index) => {
        return <TodoList key={index} id={index} text={val} onSelect={deleteItem}/>
      })}</ol>
    </div>
  )
}

export default TodoMain