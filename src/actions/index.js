import * as types from './../constants/ActionTypes';

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}

export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task //task: task
    }
}

export const saveTask = (task) => {
    return {
        type: types.SAVE_TASK,
        task //task: task
    }
}

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}

export const openForm = () => {
    return {
        type: types.OPEN_FORM
    }
}

export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}

export const updateStatusTask = (id) => {
    return {
        type: types.UPDATE_STATUS_TASK,
        id // id : id
    }
}

export const deleteTask = (id) => {
    return {
        type: types.DELETE_TASK,
        id // id : id
    }
}

export const editTask = (task) => {
    return {
        type: types.EDIT_TASK,
        task // task: task
    }
}

export const filterTask = (filter) => {
    return {
        type: types.FILTER_TASK,
        filter // filter: filter
    }
}

export const searchTask = (keyword) => {
    return {
        type: types.SEARCH_TASK,
        keyword // keyword: keyword
    }
}

export const sortTask = (sort) => {
    return {
        type: types.SORT_TASK,
        sort // sort: sort
    }
}

export const addToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product, // product: product
        quantity // quantity: quantity
    }
}

export const changeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message, // message: message
    }
}

export const removeProductInCart = (product) => {
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        product, // product: product
    }
}

export const updateProductInCart = (product, quantity) => {
    return {
        type: types.UPDATE_PRODUCT_IN_CART,
        product, // product: product
        quantity // quantity: quantity
    }
}

export const fetchProducts = (products) => {
    return {
        type: types.FETCH_PRODUCTS,
        products // products: products
    }
}