import * as types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

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

// Create action to fetch data from api and dispatch this action
export const fetchProductsCallApi = () => {
    return (dispatch) => {
        return callApi('GET', `products`, null).then((res) => {
            dispatch(fetchProducts(res.data))
        });
    }
}

export const deleteProduct = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        id // id: id
    }
}

export const deleteProductCallApi = (id) => {
    return (dispatch) => {
        return callApi('DELETE', `products/${id}`, null).then(res => {
            dispatch(deleteProduct(id))
        })
    }
}

export const addProduct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product // product: product
    }
}

export const addProductCallApi = (product) => {
    return (dispatch) => {
        return callApi('POST', 'products', product).then(res => {
            // res.data is new product is added in db
            dispatch(addProduct(res.data))
        })
    }
}

// Get product on store
export const getProduct = (product) => {
    return {
        type: types.GET_PRODUCT,
        product // product: product
    }
}

// Get product on store
export const getProductCallApi = (id) => {
    return (dispatch) => {
        return callApi('GET', `products/${id}`, null).then((res) => {
            // res.data is product get from db
            dispatch(getProduct(res.data))
        })
    }
}

export const updateProduct = (product) => {
    return {
        type: types.UPDATE_PRODUCT,
        product // product: product
    }
}

export const updateProductCallApi = (product) => {
    return (dispatch) => {
        return callApi('PUT', `products/${product.id}`, product).then(res => {
            // res.data is new product is added in db
            dispatch(updateProduct(res.data))
        })
    }
}