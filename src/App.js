import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Components/Main/Home'
import { Header } from './Components/Common/Header'
import { ToDoContext } from './Context/ToDoContext'

export default function App() {
  return (
   <>
    <ToDoContext>
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </ToDoContext>
   </>
  )
}

