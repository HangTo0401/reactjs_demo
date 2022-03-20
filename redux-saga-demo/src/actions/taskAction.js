import * as taskApis from './../apis/taskApi';

// Using thunk to handle async action
export const fetchListTasks = () => {
    return dispatch => {
        taskApis.getListTasks().then(data => {
            console.log('data: ' + data)
        }).catch(error => {
            console.log('error: ' + error)
        })
    }
}
