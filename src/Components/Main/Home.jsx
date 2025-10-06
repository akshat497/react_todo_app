import React, { useContext } from 'react'
import { createToDo } from '../../Context/ToDoContext'

export const Home = () => {
    const {title,setTitle,description,setDescription,completed,setCompleted,important,setImportant}=useContext(createToDo);
  function AddTask(){
    const tasks=JSON.parse(localStorage.getItem('tasks'))||[];
    const obj={
        title,
        description,
        important,
        completed
    }
    tasks.push(obj)
    localStorage.setItem("tasks",JSON.stringify(tasks))


  }
  return (
    <div className='AddTaskHolder'>
    <label>Title:-</label>
        <input type='text' placeholder='Enter title here' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <label>Description:-</label>
       
        <textarea rows={10} placeholder='Enter Description' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
       <div>
         <label className='radioHolders'>
         <div className='Labels'>Important </div>
         <input type='radio' name='impGroup' class='radio' checked={important} onChange={(e)=>{setImportant(e.target.checked)}}/>
         </label>
        <label className='radioHolders'>
        <div className='Labels'>Completed </div>
        <input type='radio' name='impGroup' class='radio' checked={completed} onChange={(e)=>{setCompleted(e.target.checked)}}/></label>
       </div>
       <button onClick={AddTask}>Add Task</button>
    </div>
  )
}
// npm i react-router-dom