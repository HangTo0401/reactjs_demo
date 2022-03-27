import * as uiActionsType from './../constants/uiActionsType';

export const showLoading = () => {
    return {
        type: uiActionsType.GLOBAL_SHOW_LOADING
    }
}

export const hideLoading = () => {
    return {
        type: uiActionsType.GLOBAL_HIDE_LOADING
    }
}
