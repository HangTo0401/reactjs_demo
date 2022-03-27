import * as taskActionsType from './../constants/taskActionsType';
import * as toastHelpers from './../helpers/toastHelpers';

const initialState = {
    listTasks: []
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
        default:
            return state
    }
}

export default taskReducer
