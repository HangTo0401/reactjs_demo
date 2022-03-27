import * as uiActionsType from './../constants/uiActionsType';

const initialState = {
    showLoading: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case uiActionsType.GLOBAL_SHOW_LOADING:
            return {
                ...state,
                showLoading: true
            }
        case uiActionsType.GLOBAL_HIDE_LOADING:
            return {
                ...state,
                showLoading: false
            }
        default:
            return state
        
    }
}

export default reducer
