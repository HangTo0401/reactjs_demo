// Create initial state
var initialState = {
    status: false
};

// Create reducer
var myReducer = (state = initialState, action) => {
    if (action.type === 'TOGGLE_STATUS') {
        state = !state
    }
    // Return new state
    return state
}

export default myReducer