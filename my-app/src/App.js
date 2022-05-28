import React, { useState } from "react";
import "./index.css";
import Task from "./Task";

function App() {
  const [taskName, setTaskName] = useState("");
  const [time, setTime] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    setTaskList([...taskList, { task: taskName, time: time }]);
    setTime(" ");
    setTaskName(" ");
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        id="name"
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
        placeholder="Name"
      />
      <br />
      <input
        type="text"
        id="time"
        onChange={(e) => {
          setTime(e.target.value);
        }}
        placeholder="Time"
      />
      <br />
      <button onClick={addTask}>Add</button>

      {taskList.map((task) => {
        return <Task taskName={task.task} time={task.time} />;
      })}
    </div>
  );
}

export default App;
