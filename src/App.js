
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

  function remove_item(i) {
    const newTodoList =todoList.filter(function (j) {
    return (j !== i);
});
setTodoList(newTodoList);
        
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
            //in react if we want to pass an argument to the function like the following 
            //we should assign it to a function and could not do it on itself.
          return <li className='list'>{todoList.indexOf(i)+1}-{i} <button onClick={()=>remove_item(i)}>Delete</button></li>
        })}

        </ul>
        
      </div>

      
    </div>
  )
}

export default App







