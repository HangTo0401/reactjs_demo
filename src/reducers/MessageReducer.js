import * as messages from './../constants/Messages';
var initialState = []

var MessageReducer = (state = initialState, action) => {
    switch(action.type) {
        case messages.MSG_WELCOME:
            return [...state]
        default: return [...state]
    }
}

export default MessageReducer