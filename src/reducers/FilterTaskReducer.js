import * as types from './../constants/ActionTypes';

var initialState = {
    name: '',
    status: ''
}

var FilterTaskReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.FILTER_TASK:
            console.log(action)
            return state
        default: return state
    }
}

export default FilterTaskReducer