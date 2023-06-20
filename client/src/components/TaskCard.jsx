import {useNavigate} from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa';
import { useState,useEffect } from 'react';
import { updateTask } from "../api/tasks.api";
import {toast} from "react-hot-toast"



export default function TaskCard({ task, task_data }) {
  const navigate = useNavigate();
  const [isDone, setIsDone] = useState(task.Done)
  

  async function update(d, value){
    d.Done = value
    await updateTask(d.id, d)
    console.log(value)
  }

  var styles = () => {
    if (isDone) {
      return {
        title: "font-bold uppercase text-lg line-through text-zinc-500 max-w-[900px] truncate",
        done: 'font-bold text-green-600',
        div: "z-[0] rounded-lg bg-zinc-900 p-5 hover:bg-zinc-900 hover:cursor-pointer ease-in-out duration-300"
      };
    } else {
      return {
        title: "font-bold uppercase text-lg max-w-[900px] truncate",
        done: 'font-bold text-amber-600',
        div: "z-[0] rounded-lg bg-zinc-800 p-5 hover:bg-zinc-700 hover:cursor-pointer ease-in-out duration-300"
      };
    }
  };

  const handleToggleDone = (e) => {
    e.stopPropagation();
    setIsDone(!isDone);
    update(task_data, !isDone)
  };

  return (
    <div
      className={styles().div}
        
      onClick={() => {
        !isDone ? navigate("/tasks/" + task.id) : null;
      }}
    >
      <div className="flex justify-between items-center mb-2">
        <h1 className={styles().title}>{task.Title}</h1>
        <button
            className={`w-12 h-12 flex items-center justify-center rounded-full bg-${
              isDone ? 'green' : 'gray'
            }-200`}
            onClick={handleToggleDone}
          >
            {isDone ? (
              <FaCheckCircle className="text-green-600 h-6 w-6" />
            ) : (
              <FaCheckCircle className="text-gray-500 h-6 w-6" />
            )}
          </button>
      </div>
      <hr className="rounded-xl border-2 border-amber-300" />
      <p className={styles().done}>{isDone ? "Terminada" : "Pendiente"}</p> <br />
      <p className="text-slate-400 max-w-[900px] truncate">{task.Desc}</p><br />
    </div>
  );
}



