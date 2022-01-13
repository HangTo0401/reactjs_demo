import * as types from './../constants/ActionTypes';

var initialState = {
    by: '',
    value: 1 //1 : increase , -1: decrease
};

var SortTaskReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SORT_TASK:
            return {
                by: action.sort.by,
                value: action.sort.value
            }
        default: return state
    }
}

export default SortTaskReducer