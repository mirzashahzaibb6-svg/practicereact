import { useState } from "react";


function TaskForm({ addTask }) {

  const [task, setTask] = useState("");


  function handleSubmit(e) {

    e.preventDefault();

    if(task.trim() === "") return;


    addTask(task);

    setTask("");

  }


  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e)=>setTask(e.target.value)}
      />


      <button>
        Add Task
      </button>


    </form>
  );
}


export default TaskForm;