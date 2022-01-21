import * as messages from './../constants/Messages';
var initialState = messages.MSG_WELCOME

var MessageReducer = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state]
    }
}

export default MessageReducer