import * as Types from './../constants/ActionTypes';
var initialState = [];

const findIndex = (products, id) => {
    var result = -1;
    if (products.length > 0) {
        products.forEach((product, index) => {
            if (product.id === id) {
                result = index
            }
        });
    }
    return result;
}

const ProductsReducer = (state = initialState, action) => {
    var index = -1;
    var { id, product } = action
    switch(action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state]
        case Types.DELETE_PRODUCT: 
            index = findIndex(state, id)
            if (index !== -1) {
                state.splice(index, 1);
            }
            return [...state]
        case Types.ADD_PRODUCT:
            state.push(action.product)
            return [...state]
        case Types.GET_PRODUCT:
            return action.product
        case Types.UPDATE_PRODUCT:
            index = findIndex(state, product.id);
            state[index] = product;
            return state;
        default: return [...state]
    }
}

export default ProductsReducer