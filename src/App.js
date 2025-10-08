import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Components/Main/Home'
import { Header } from './Components/Common/Header'
import { ToDoContext } from './Context/ToDoContext'
import { ToastContainer } from 'react-toastify';
import { Tasks } from './Components/Main/Tasks'
import { PendingTasks } from './Components/Main/PendingTasks'
import { CompletedTasks } from './Components/Main/CompletedTasks'
export default function App() {
  return (
   <>
    <ToDoContext>
      <Header/>
         <ToastContainer />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tasks' element={<Tasks/>}/>
      <Route path='/pendingtasks' element={<PendingTasks/>}/>
         <Route path='/completedtasks' element={<CompletedTasks/>}/>
    </Routes>
    </ToDoContext>
   </>
  )
}

