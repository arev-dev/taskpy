import { getAllTasks } from "../api/tasks.api"
import { useEffect, useState } from "react"
import TaskCard from "./TaskCard";

function TasksList() {
    const [tasks, setTasks] = useState()
    useEffect(() =>{
        async function load(){
            const taskData = await getAllTasks();
            setTasks(taskData.data);
        }
        load();
    },[])

  return (
    <div className="_">
        {tasks?.length === 0 ?
            <div class="absolute z-[-1] inset-0 flex justify-center items-center">
                <h1 class="text-center font-bold text-3xl text-zinc-600 md:text-lg">No hay Tareas  que mmostrar por aquí...</h1>
            </div>
        ://flex flex-col
        <div className="flex flex-col p-6 md:grid grid-cols-3 gap-1">
            {tasks?.map(t=>(
            <TaskCard task={t} key={t.id}/>
        ))}
        </div>
        }
    </div>
    
  )
}

export default TasksList
