import * as types from '../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('cart'));
var initialState = data ? data : [];

var ShoppingCartReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_TO_CART:
            console.log(action)
            return [...state] 
        default: return [...state]
    }
}

export default ShoppingCartReducer