import {useForm} from "react-hook-form";
import { postTask, deleteTask, updateTask, getAllTasks } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import {toast} from "react-hot-toast"

var areDelete = false
var styles = {
  inputs: "p-2 rounded-lg text-lg bg-neutral-900 block w-full mb-3",
  desc: "p-2 rounded-lg text-XS bg-neutral-900 block w-full mb-3 "
}

function notiToast(type){
  if (type === 0){
    toast.success("Tarea Creada.", {
      position: "bottom-right"
    })
  }
  else if (type === 1){
    toast.success("Tarea Actualizada.", {
      position: "bottom-right"
    })
  }
  else if (type === 2){
    toast.success("Tarea Eliminada.", {
      position: "bottom-right"
    })
  }
}

function TaskEditFormPage() {
  const {register, handleSubmit, formState:{errors}, setValue} = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async data =>{
     if(params.id){
        await updateTask(params.id, data)
        if (areDelete) {notiToast(1)}
     }else{
        await postTask(data)
        notiToast(0)
     }
     navigate("/tasks")
  });

  useEffect(() => {
    async function loadData(){
      if (params.id){
        const res = await getAllTasks(params.id)
        setValue("Title", res.data.Title)
        setValue("Desc", res.data.Desc)
      }
    }
    loadData();
  }, [])

  return (
    <div className="bg-neutral-800 rounded-lg p-6 max-w-xl mx-auto">
      <form className=""  onSubmit={onSubmit}>
        
        <input className={styles.inputs} type="text" placeholder="Título de la Tarea"
        {...register("Title", {required:true})}/>
        {errors.Title && <span className="font-bold text-red-600 text-center block">¡El título es requerido!</span>}
        
        <textarea className={styles.desc}rows="3" placeholder="Descripción de la Tarea"
        {...register("Desc", {required:false})}/>
       <div className="flex justify-center">
            <button onClick={areDelete =true} className="p-3 mt-3 rounded-lg bg-green-500 font-bold w-full mr-2
             focus:outline-none 
             focus:ring
             focus:ring-green-900
             hover:bg-green-600 hover
             ease-in-out duration-300">{!params.id ? "Guardar Tarea" : "Guardar Cambios"}</button>
            
        </div>
        
      </form>
      <div className="w-full">
      {
            params.id && <button className="
            p-3 mt-3 rounded-lg bg-red-500 font-bold w-48
            focus:outline-none 
             focus:ring
             focus:ring-red-900
             hover:bg-red-600 hover
             ease-in-out duration-300
            " onClick={async() =>{
              const accept = window.confirm("Estás seguro de eliminarlo?");
              
              if (accept){
                await deleteTask(params.id)
                notiToast(2)
                navigate("/tasks")
              }
            }}>Eliminar</button>
          }
      </div>
      
      
    </div>
  )
}

export default TaskEditFormPage