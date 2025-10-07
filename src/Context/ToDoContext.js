import React, { createContext, useState } from 'react'
export const createToDo=createContext();
export const ToDoContext = ({children}) => {

    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false);
    const [important, setImportant] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [searchedValue, setsearchedValue] = useState("");
  return (
    <createToDo.Provider value={{title,setTitle,description,setDescription,completed,setCompleted,important,setImportant,tasks, setTasks,searchedValue, setsearchedValue}}>
    {children}
    </createToDo.Provider>
  )
}
