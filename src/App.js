
import React from 'react'
import { useState} from "react";


const App = () => {
  const [todoList , setTodoList] =useState([]);
  const [newTask , setNewTask]=useState("")

  const handleChange=(event)=>{
    setNewTask(event.target.value)
  }

  const addTask=()=>{
    const newTodoList =[...todoList,newTask]
    setTodoList(newTodoList)
  }

  return (
    <div className='App'>
      <div className='addTask'>
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        <h1>your todo list:</h1>

        <ul>
          {todoList.map((i)=>{
          return <li>{i}</li>
        })}

        </ul>
        
      </div>

      
    </div>
  )
}

export default App







