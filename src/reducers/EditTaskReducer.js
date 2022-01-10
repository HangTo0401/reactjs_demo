import * as types from './../constants/ActionTypes';

var initialState = {};

var EditTaskReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.EDIT_TASK:
            return state
        default:
            return state
    }
}

export default EditTaskReducer