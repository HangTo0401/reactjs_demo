import * as uiActionsType from './../constants/uiActionsType';

export const showLoading = () => {
    type: uiActionsType.GLOBAL_SHOW_LOADING
}

export const hideLoading = () => {
    type: uiActionsType.GLOBAL_HIDE_LOADING
}
