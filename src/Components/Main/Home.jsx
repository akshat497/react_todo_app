import React, { useContext } from "react";
import { createToDo } from "../../Context/ToDoContext";
import { toast } from "react-toastify";
import { Tasks } from "./Tasks";

export const Home = () => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    completed,
    setCompleted,
    important,
    setImportant,
    isEditing,
    editingIndex,
    tasks,
    ExtractFromLocal,
    price, setprice
  } = useContext(createToDo);
  function AddTask() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const obj = {
      title,
      description,
      important,
      completed,
      price
    };
    tasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    toast.success("🦄 Task added!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

   function EditTask(){
    const copytasks=[...tasks];
    //tasks.         copyTasks
  //  0 {}               0 {}
  //  1 {}               1 {}
  //  2 {}               2 {}
  //  3 {}               3 {}
    copytasks[editingIndex]={
      title,
      description,
      important,
      completed
    }
    console.log(copytasks)
    localStorage.setItem("tasks",JSON.stringify(copytasks));
    ExtractFromLocal();
    toast.success("Edited successfully", {
          progress: false,
          hideProgressBar: true,
        });
        

  }
  return (
    <div className="AddTaskHolder">
      <label>Title:-</label>
      <input
        type="text"
        placeholder="Enter title here"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <label>Price:-</label>
      <input
        type="text"
        placeholder="Enter price here"
        value={price}
        onChange={(e) => {
          setprice(e.target.value);
        }}
      />
      <label>Description:-</label>

      <textarea
        rows={10}
        placeholder="Enter Description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <div>
        <label className="radioHolders">
          <div className="Labels">Important </div>
          <input
            type="radio"
            name="impGroup"
            class="radio"
            checked={important}
            onChange={(e) => {
              setImportant(e.target.checked);
            }}
          />
        </label>
        <label className="radioHolders">
          <div className="Labels">Completed </div>
          <input
            type="radio"
            name="impGroup"
            class="radio"
            checked={completed}
            onChange={(e) => {
              setCompleted(e.target.checked);
            }}
          />
        </label>
      </div>
      {isEditing? 
      <button onClick={EditTask}>Edit Task</button>
      : <button onClick={AddTask}>Add Task</button>
      }
     
    </div>
  );
};
// npm i react-router-dom
