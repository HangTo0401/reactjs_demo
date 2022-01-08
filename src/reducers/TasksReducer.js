import * as types from './../constants/ActionTypes';
import _ from 'lodash';

// Get from localStorage
var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];

var onGenerateId = () => {
    return Math.floor((1 + Math.random()) * 0x1000).toString(16).substring(1);
}

var TasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LIST_ALL:
            return [...state]
        case types.ADD_TASK:
            // save task on initialState in Store
            var newTask = {
                id: onGenerateId(),
                name: action.task.name,
                status: action.task.status === 'true' ? true : false
            }

            state.push(newTask)
            localStorage.setItem('tasks', JSON.stringify(state)) // save on localStorage as String format, not Object format
            return [...state] // clone to new array and return new array
        case types.UPDATE_STATUS_TASK:
            var index = _.findIndex(state, (task) => { return task.id === action.id });
            if (index !== -1) {
                state[index].status = !state[index].status;
            }
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state]
        default: 
            return state
    }
}

export default TasksReducer