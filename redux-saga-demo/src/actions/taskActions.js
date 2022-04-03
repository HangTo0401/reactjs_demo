import * as taskApis from '../apis/taskApi';
import * as taskActionsType from '../constants/taskActionsType';
import { STATUS } from '../constants';

// Using thunk to handle async action
export const fetchListTasksActions = (params = {}) => {
    return {
        type: taskActionsType.FETCH_TASKS,
        payload: {
            params
        }
    }
}

// Using thunk to handle async action
// data inside actions is called payload
export const fetchListTasksSuccessActions = (data) => {
    return {
        type: taskActionsType.FETCH_TASKS_SUCCESS,
        payload: data
    }
}

// Using thunk to handle async action
export const fetchListTasksFailureActions = (error) => {
    return {
        type: taskActionsType.FETCH_TASKS_FAILURE,
        payload: error
    }
}

// Using thunk to handle async action
export const addTaskActions = (title, description) => {
    return {
        type: taskActionsType.ADD_TASK,
        payload: {
            title,
            description
        }
    }
}

// Using thunk to handle async action
// data inside actions is called payload
export const addTaskSuccessActions = (data) => {
    return {
        type: taskActionsType.ADD_TASK_SUCCESS,
        payload: data
    }
}

// Using thunk to handle async action
export const addTaskFailureActions = (error) => {
    return {
        type: taskActionsType.ADD_TASK_FAILURE,
        payload: error
    }
}

// Using thunk to handle async action
export const filterTask = (keyword) => {
    return {
        type: taskActionsType.FILTER_TASK,
        payload: keyword
    }
}

// Using thunk to handle async action
export const filterTaskSuccess = (data) => {
    return {
        type: taskActionsType.FILTER_TASK_SUCCESS,
        payload: data
    }
}

// Using thunk to handle async action
export const setTaskEditingActions = (task) => {
    return {
        type: taskActionsType.SET_TASK_EDITING,
        payload: {
            task
        }
    }
}

// Using thunk to handle async action
export const updateTaskActions = (title, description, status = STATUS[0].value) => {
    return {
        type: taskActionsType.UPDATE_TASK,
        payload: {
            title,
            description,
            status
        }
    }
}

// Using thunk to handle async action
// data inside actions is called payload
export const updateTaskSuccessActions = (data) => {
    return {
        type: taskActionsType.UPDATE_TASK_SUCCESS,
        payload: data
    }
}

// Using thunk to handle async action
export const updateTaskFailureActions = (error) => {
    return {
        type: taskActionsType.UPDATE_TASK_FAILURE,
        payload: error
    }
}

// Using thunk to handle async action
export const deleteTaskActions = (taskId) => {
    return {
        type: taskActionsType.DELETE_TASK,
        payload: {
            taskId
        }
    }
}

// Using thunk to handle async action
// data inside actions is called payload
export const deleteTaskSuccessActions = (data) => {
    return {
        type: taskActionsType.DELETE_TASK_SUCCESS,
        payload: data
    }
}

// Using thunk to handle async action
export const deleteTaskFailureActions = (error) => {
    return {
        type: taskActionsType.DELETE_TASK_FAILURE,
        payload: error
    }
}

// Using thunk to handle async action
/**
 * B1: Gọi fetchListTasksRequest
 * B2: Để reset lại state về rỗng [], ta dispatch fetchListTasksActions
 * B3: Nếu thành công, ta gọi fetchListTasksSuccessActions để trả về data 
 * B4: Nếu thất bại, ta gọi fetchListTasksFailureActions để trả về error
 * @returns 
 */
export const fetchListTasksRequest = () => {
    return dispatch => {
        dispatch(fetchListTasksActions());
        taskApis.getListTasks().then(response => {
            const { data } = response
            console.log('data: ' + JSON.stringify(data));
            dispatch(fetchListTasksSuccessActions(data));
        }).catch(error => {
            console.log('error: ' + JSON.stringify(error));
            dispatch(fetchListTasksFailureActions(error));
        })
    }
}
