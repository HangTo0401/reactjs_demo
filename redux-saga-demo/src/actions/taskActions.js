import * as taskApis from '../apis/taskApi';
import * as taskActionsType from '../constants/taskActionsType';

// Using thunk to handle async action
export const fetchListTasksActions = () => {
    return {
        type: taskActionsType.FETCH_TASKS
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
