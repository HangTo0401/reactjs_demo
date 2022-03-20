import * as taskActionsType from './../constants/taskActionsType';

const initialState = {
    listTasks: []
}

const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case taskActionsType.FETCH_TASKS: 
            return {
                ...state,
                listTasks: [] // gán listTasks trong store là rỗng
            };
        default:
            return state
    }
}

export default taskReducer
