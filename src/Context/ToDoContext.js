import React, { createContext, useState } from 'react'
export const createToDo=createContext();
export const ToDoContext = ({children}) => {

    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false);
    const [important, setImportant] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [searchedValue, setsearchedValue] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null)
    const [price, setprice] = useState(0)

    function ExtractFromLocal(){
      const resp=JSON.parse(localStorage.getItem("tasks"))
      setTasks(resp)
    }
  return (
    <createToDo.Provider value={{
      title,setTitle,
      description,setDescription,
      completed,setCompleted,
      important,setImportant,tasks, 
      setTasks,searchedValue,
       setsearchedValue,isEditing, 
       setIsEditing,
       editingIndex, setEditingIndex,
       ExtractFromLocal,
       price, setprice}}>
    {children}
    </createToDo.Provider>
  )
}
