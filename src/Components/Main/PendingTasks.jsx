import React, { useContext, useEffect } from 'react'
import { createToDo } from '../../Context/ToDoContext';
import { toast } from 'react-toastify';

export const PendingTasks = () => {
    const {tasks, setTasks} =useContext(createToDo)
    useEffect(()=>{
           const response = JSON.parse(localStorage.getItem("tasks")) || [];
           setTasks(response);


    },[])
function deleteTask(index){
    tasks.splice(index,1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
     const response = JSON.parse(localStorage.getItem("tasks")) || [];
           setTasks(response);
    toast.success("Deleted successfully",{progress:false,hideProgressBar:true})

}
  return (
    <>
        <div className='tasksHolder'>
            {tasks.map((task,index)=>{
            return(<>
                <div className='taskCard' style={{display:task.completed?"none":"block"}}>
                <label className='badge' style={{color:task.important?"green":"red"}}>{task.important?"important":"Not important"}</label>
                <h3>{task.title}</h3>
                <div id='descriptionHolder'>{task.description}</div>
                <div className='buttonHolder'>
                    <button style={{backgroundColor:"skyblue",color:"aliceblue"}}>Edit</button>
                    <button style={{backgroundColor:"aliceblue",color:"red"}} onClick={()=>{deleteTask(index)}}>Delete</button>
                </div>

            </div>
            </>)
        })}
        </div>
    </>
  )
}
