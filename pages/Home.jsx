import { useState, useEffect } from "react";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";


function Home() {


  const [tasks, setTasks] = useState([]);



  // LocalStorage se tasks load karna
  useEffect(() => {

    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {

      setTasks(JSON.parse(savedTasks));

    }

  }, []);




  // Tasks ko LocalStorage mein save karna
  useEffect(() => {

    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );

  }, [tasks]);





  function addTask(text){

    const newTask = {

      id: Date.now(),

      title: text,

      completed: false

    };


    setTasks([
      ...tasks,
      newTask
    ]);

  }





  function deleteTask(id){

    const updatedTasks = tasks.filter(
      (task)=> task.id !== id
    );


    setTasks(updatedTasks);

  }





  function completeTask(id){

    const updatedTasks = tasks.map((task)=>{


      if(task.id === id){

        return {

          ...task,

          completed: !task.completed

        };

      }


      return task;


    });


    setTasks(updatedTasks);

  }





  // Task edit karna
  function editTask(id, newTitle){

    const updatedTasks = tasks.map((task)=>{

      if(task.id === id){

        return {

          ...task,

          title: newTitle

        };

      }


      return task;


    });


    setTasks(updatedTasks);

  }





  return (

    <div>

      <h1>Task Manager</h1>


      <TaskForm 
        addTask={addTask}
      />



      <TaskList

        tasks={tasks}

        deleteTask={deleteTask}

        completeTask={completeTask}

        editTask={editTask}

      />


    </div>

  );

}


export default Home;