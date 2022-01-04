import * as Type from '../constants/ActionTypes';

export const status = () => {
    return {
        type: Type.TOGGLE_STATUS
    }
}

export const sort = (sort) => {
    return {
        type: Type.SORT,
        sort // sort: sort
    }
}