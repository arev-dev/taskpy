import {URL_API} from "./api";
import axios from 'axios'

export const getAllTasks = (id=null) => id === null ?  axios.get(URL_API) :  axios.get(URL_API+id)
export const postTask = (task) => axios.post(URL_API,task)
export const deleteTask = (id) => axios.delete(URL_API+id)
export const updateTask = (id, task) => axios.put(URL_API+id+"/", task)
