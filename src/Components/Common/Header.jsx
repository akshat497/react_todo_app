import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { createToDo } from '../../Context/ToDoContext';

export const Header = () => {
  const location=useLocation();
  const {searchedValue, setsearchedValue,tasks,setTasks}=useContext(createToDo);
  function sort(){

    const sorted=tasks.sort((a,b)=>Number(a.price)-Number(b.price));
    console.log(sorted)
    setTasks(sorted)

  }
  return (
    <div className='NavBar'>
       <div>
         <div><Link to="/tasks">Tasks</Link></div>
          <div><Link to="/pendingtasks">Pending Tasks</Link></div>
            <div><Link to="/completedtasks">Completed Tasks</Link></div>
       </div>
       <div onClick={sort}>^sort</div>
              <div style={{display:location.pathname==="/"?"none":"block",color:"black",fontWeight:"bolder"}}>
              <input type='Search' placeholder='Search.....' value={searchedValue} onChange={(e)=>{setsearchedValue(e.target.value)}}/>
              </div>
    </div>
  )
}
