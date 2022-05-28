import React from "react";

function Task({ taskName, time }) {
  return (
    <div>
      <h3>{taskName}</h3>
      <h3>{time}</h3>
    </div>
  );
}

export default Task;
