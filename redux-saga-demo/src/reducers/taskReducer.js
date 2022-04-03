import * as taskActionsType from './../constants/taskActionsType';
import * as toastHelpers from './../helpers/toastHelpers';

const initialState = {
    listTasks: [],
    taskEditing: null
}

const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case taskActionsType.FETCH_TASKS: 
            return {
                ...state,
                listTasks: [] // gán listTasks trong store là rỗng
            };
        case taskActionsType.FETCH_TASKS_SUCCESS:
            const data = action.payload 
            return {
                ...state,
                listTasks: data // gán listTasks trong store là data
            };
        case taskActionsType.FETCH_TASKS_FAILURE:
            const error = action.payload 
            toastHelpers.toastError(error)
            return {
                ...state
            };
        case taskActionsType.FILTER_TASK:
            return {
                ...state
            };
        case taskActionsType.FILTER_TASK_SUCCESS:
            const listTasks = action.payload;
            return {
                ...state,
                listTasks: listTasks
            };
        case taskActionsType.ADD_TASK: 
            return {
                ...state
            };
        case taskActionsType.ADD_TASK_SUCCESS:
            const newTask = action.payload 
            return {
                ...state,
                listTasks: [newTask].concat(state.listTasks)
            };
        case taskActionsType.ADD_TASK_FAILURE:
            const { taskError } = action.payload 
            toastHelpers.toastError(taskError)
            return {
                ...state
            };
        case taskActionsType.SET_TASK_EDITING:
            const { task } = action.payload
            return {
                ...state,
                taskEditing: task
            };
        case taskActionsType.UPDATE_TASK: 
            return {
                ...state
            };
        case taskActionsType.UPDATE_TASK_SUCCESS:
            const updatedTask = action.payload 
            const listOfTasks = state.listTasks
            const index = listOfTasks.findIndex(item => item.id === updatedTask.id);
            if (index !== -1) {
                const newList = [
                ...listOfTasks.slice(0, index),
                updatedTask,
                ...listOfTasks.slice(index + 1),
                ];
                toastHelpers.toastSuccess('Update task successfully');
                return {
                    ...state,
                    listTasks: newList,
                };
            }
            return {
                ...state
            };
        case taskActionsType.UPDATE_TASK_FAILURE:
            return {
                ...state
            };
        case taskActionsType.DELETE_TASK: 
            return {
                ...state
            };
        case taskActionsType.DELETE_TASK_SUCCESS:
            const deleteId = action.payload
            toastHelpers.toastSuccess(`Delete task successfully`);
            return {
                ...state,
                listTasks: state.listTasks.filter(item => item.id !== deleteId)
            };
        case taskActionsType.DELETE_TASK_FAILURE:
            return {
                ...state
            };
        default:
            return state
    }
}

export default taskReducer
