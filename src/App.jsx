import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([
    { name: "task1", status: false },
    { name: "task1", status: true },
    { name: "task1", status: true },
    { name: "task1", status: false },
  ]);
  const inputTask = useRef();
  const addTasks = () => {
    if (inputTask.current.value === "") {
      return alert("Error");
    }
    let arrayTasks = [...tasks];
    let newObj = { name: inputTask.current.value, status: false };
    arrayTasks.push(newObj);
    setTasks(arrayTasks);
    inputTask.current.value = "";
  };

  const toggle = (index) => {
    let objToggle = [...tasks];
    objToggle[index].status = !objToggle[index].status;
    setTasks(objToggle);
  };

  const deleteTask=(index)=>{
    let arrayTasks=[...tasks]
    arrayTasks.splice(index,1);
    setTasks(arrayTasks)
  }
  return (
    <div className="col-12 d-flex align-items-center justify-content-center">
      <div className="App col-6 ">
      <h1>Todo List</h1>
      <div className="to-do-container">
        <ul>
          {tasks.map(({ name, status }, index) => {
            return (
              <div className="items d-flex  justify-content-between align-items-center">
                <li className={status ? "check" : ""} onClick={() => toggle(index)} key={index}>{index + 1}-{name}</li>
                <button type="button"  onClick={()=>deleteTask(index)}  class="btn-close" aria-label="Close"></button>              </div>
            );
          })}
        </ul>
        <input ref={inputTask} placeholder="Enter Your Task" />
        <button onClick={addTasks} className="btn btn-primary">
          Add Task
        </button>
      </div>
    </div>
    </div>
    
  );
}
