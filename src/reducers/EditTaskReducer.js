import * as types from './../constants/ActionTypes';

var initialState = {};

var EditTaskReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.EDIT_TASK:
            console.log(action)
            return state
        default:
            return state
    }
}

export default EditTaskReducer