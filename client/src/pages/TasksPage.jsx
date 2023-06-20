import TasksList from "../components/TasksList"
import { Link } from "react-router-dom"

function TasksPage() {
  return (
    <div>
      <Link className="flex justify-end" to="/tasks-create">
            <button className='
            font-bold
            absolute
            h-12 w-26
            top-7
            right-6
            md:top-8 mb-4 
            lg:text-xl
            bg-amber-500
            text-zinc-100 
            hover:bg-blue-700
            focus:outline-none 
            focus:ring
            focus:ring-blue-900
            px-3 py-2 rounded-lg
            ease-in-out duration-300
            '>Create Task</button>
        </Link>
      <TasksList />
    </div>
    
  )
}

export default TasksPage
