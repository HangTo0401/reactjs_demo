import * as types from './../constants/ActionTypes';

// Get from localStorage
var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];

var TasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LIST_ALL:
            return state
        default: return state
    }
}

export default TasksReducer