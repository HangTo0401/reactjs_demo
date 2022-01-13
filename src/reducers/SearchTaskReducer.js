import * as types from './../constants/ActionTypes';

var initialState = '';

var SearchTaskReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SEARCH_TASK:
            return action.keyword
        default: return state
    }
}

export default SearchTaskReducer