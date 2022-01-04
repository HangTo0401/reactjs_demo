// Create initial state
var initialState = {
    by: 'name',
    value: 1 // 1: increase, -1: decrease
};

// Create reducer
var myReducer = (state = initialState, action) => {
    if (action.type === 'SORT') {
        var { by, value } = action.sort
        return { by, value }
    }
    // Return new state
    return state
}

export default myReducer