import * as modalActionsType from './../constants/modalActionsType';

const initialState = {
    showModal: false,
    title: '',
    component: null
}

const modalReducer = (state = initialState, action) => {
    switch(action.type) {
        case modalActionsType.SHOW_MODAL: 
            return {
                ...state,
                showModal: true
            };
        case modalActionsType.HIDE_MODAL:
            return {
                ...state,
                showModal: false
            };
        case modalActionsType.CHANGE_MODAL_TITLE:
            const title = action.payload;
            return {
                ...state,
                title: title
            };
        case modalActionsType.CHANGE_MODAL_CONTENT:
            const component = action.payload;
            return {
                ...state,
                component: component
            };
        default:
            return state
    }
}

export default modalReducer
