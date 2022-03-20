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
        case taskActionsType.FETCH_TASKS_SUCCESS:
            const data = action.payload 
            return {
                ...state,
                listTasks: data // gán listTasks trong store là data
            };
        case taskActionsType.FETCH_TASKS_FAILURE:
            return {
                ...state
            };
        default:
            return state
    }
}

export default taskReducer
