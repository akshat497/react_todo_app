import React, { useContext, useEffect, useState } from "react";
import { createToDo } from "../../Context/ToDoContext";
import { toast } from "react-toastify";
import { Modal } from "../Common/Modal";
import { Home } from "./Home";

export const Tasks = () => {
  const { tasks, setTasks, searchedValue,title,setTitle,description,setDescription,completed,setCompleted,important,setImportant, setsearchedValue } =
    useContext(createToDo);

  const [filteredTasks, setFilteredTasks] = useState([]);
  useEffect(() => {
    const response = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(response);
  }, []);

  useEffect(() => {
    const filteredArray = tasks?.filter((task) =>
      task?.title?.toLowerCase().includes(searchedValue.toLowerCase())
    );

    // if no search or no results, just show all
    if (searchedValue.trim() === "" ) {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(filteredArray);
    }
  }, [searchedValue, tasks]);

  function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    const response = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(response);
    toast.success("Deleted successfully", {
      progress: false,
      hideProgressBar: true,
    });
  }
  function handleEdit(item){
    setTitle(item.title)
    setDescription(item.description)
    setImportant(item.important)
    setCompleted(item.completed)
    

  }
  return (
    <>
    <Modal component={<Home/>} title={title} description={description} important={important} completed={completed}/>
      <div className="tasksHolder">
        {filteredTasks?.map((task, index) => {
          return (
            <>
            
              <div className="taskCard">
                <label
                  className="badge"
                  style={{ color: task.important ? "green" : "red" }}
                >
                  {task.important ? "important" : "Not important"}
                </label>
                <h3>{task.title}</h3>
                <div id="descriptionHolder">{task.description}</div>
                <div className="buttonHolder">
                  <button
                    style={{ backgroundColor: "skyblue", color: "aliceblue" }}
                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                    onClick={()=>{handleEdit(task)}}
                  >
                    Edit
                  </button>
                  <button
                    style={{ backgroundColor: "aliceblue", color: "red" }}
                    onClick={() => {
                      deleteTask(index);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
