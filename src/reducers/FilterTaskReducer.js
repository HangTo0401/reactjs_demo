import * as types from './../constants/ActionTypes';

var initialState = {
    name: '',
    status: ''
}

var FilterTaskReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.FILTER_TASK:
            var filter = {
                name: action.filter.name,
                status: parseInt(action.filter.status)
            }
            return filter
        default: return state
    }
}

export default FilterTaskReducer