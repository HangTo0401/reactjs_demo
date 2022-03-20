import axiosService from "../service/axiosService";
import { API_ENDPOINT } from "../constants";

// http://localhost:3000/tasks
const TASKS_URL = '/tasks';

// interceptors will handle request or response success or error
export const getListTasks = () => {
    return axiosService.get(`${API_ENDPOINT}/${TASKS_URL}`)
}
