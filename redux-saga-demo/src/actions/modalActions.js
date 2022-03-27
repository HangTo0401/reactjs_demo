import * as modalActionsType from './../constants/modalActionsType';

// Using thunk to handle async action
export const showModal = () => {
    return {
        type: modalActionsType.SHOW_MODAL
    }
}

export const hideModal = () => {
    return {
        type: modalActionsType.HIDE_MODAL
    }
}

export const changeModalTitle = (title) => {
    return {
        type: modalActionsType.CHANGE_MODAL_TITLE,
        payload: title
    }
}

export const changeModalContent = (component) => {
    return {
        type: modalActionsType.CHANGE_MODAL_CONTENT,
        payload: component
    }
}
