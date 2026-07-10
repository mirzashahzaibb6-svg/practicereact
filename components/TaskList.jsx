function TaskList({
  tasks,
  deleteTask,
  completeTask,
  editTask
}) {


  function handleEdit(task){

    const newTitle = prompt(
      "Edit your task",
      task.title
    );


    if(newTitle && newTitle.trim() !== ""){

      editTask(
        task.id,
        newTitle
      );

    }

  }



  return (

    <div>

      <h2>Tasks</h2>


      {
        tasks.map((task)=>(


          <div key={task.id}>


            <span

              style={{
                textDecoration:
                task.completed
                ? "line-through"
                : "none"
              }}

            >

              {task.title}

            </span>



            <button
              onClick={()=>completeTask(task.id)}
            >

              Complete

            </button>



            <button
              onClick={()=>handleEdit(task)}
            >

              Edit

            </button>



            <button
              onClick={()=>deleteTask(task.id)}
            >

              Delete

            </button>


          </div>


        ))
      }


    </div>

  );

}


export default TaskList;