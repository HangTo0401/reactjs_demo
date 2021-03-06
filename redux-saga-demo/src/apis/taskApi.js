import axiosService from "../service/axiosService";
import { API_ENDPOINT } from "../constants";
import qs from "query-string";

// http://localhost:3000/tasks
const TASKS_URL = 'tasks';

// interceptors will handle request or response success or error
export const getListTasks = (params) => {
    let queryParams = '';
    if (Object.keys(params || {}).length > 0) {
        queryParams = `?${qs.stringify(params)}`;
    }
    return axiosService.get(`${API_ENDPOINT}/${TASKS_URL}${queryParams}`)
}

export const addTask = (data) => {
    return axiosService.post(`${API_ENDPOINT}/${TASKS_URL}`, data)
}

// http://localhost:3000/tasks/:id METHOD: PUT
export const updateTask = (data, taskId) => {
    return axiosService.put(`${API_ENDPOINT}/${TASKS_URL}/${taskId}`, data)
}

export const deleteTask = (taskId) => {
    return axiosService.delete(`${API_ENDPOINT}/${TASKS_URL}/${taskId}`)
}
