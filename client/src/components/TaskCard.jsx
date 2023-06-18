import {useNavigate} from 'react-router-dom'

export default function TaskCard({task}) {
  const navigate = useNavigate()
  var styles = () =>{
    if (task.Done){
      return {
        title: "font-bold uppercase text-lg line-through text-zinc-500",
        done: 'font-bold text-green-600',
      }
    }else{
      return {
        title: "font-bold uppercase text-lg",
        done: 'font-bold text-amber-600',
      }
    }
  }
  return (
    <div className="
     rounded-lg 
     bg-zinc-800 
     p-5 
     hover:bg-zinc-700
     hover:cursor-pointer
     ease-in-out duration-300
     " 
     
     onClick={() => {!task.Done ? navigate("/tasks/"+task.id):null}}>
        {/* <div className=''>
        <button className='block p-2 rounded-lg bg-green-200'>S</button>
        </div> */}
        <h1 className={styles().title} >{task.Title}</h1>
        <hr className='rounded-xl border-2 border-amber-300'/>
        <p className={styles().done} >{task.Done ? "Terminada" : "Pendiente"}</p> <br />
        <p className='text-slate-400 max-w-[900px] truncate'>{task.Desc}</p><br />
    </div> 
  )
  } 
