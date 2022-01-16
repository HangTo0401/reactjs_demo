import * as types from './../constants/ActionTypes';

var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: '',
        description: 'Sản phẩm do Apple sản xuất',
        price: 12000000,
        inventory: 10
    },
    {
        id: 2,
        name: 'Iphone 8',
        image: '',
        description: 'Sản phẩm do Apple sản xuất',
        price: 15000000,
        inventory: 5
    },
    {
        id: 1,
        name: 'Iphone 8 Plus',
        image: '',
        description: 'Sản phẩm do Apple sản xuất',
        price: 17000000,
        inventory: 20
    }
]

var ShoppingCartProductsReducer = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state]
    }
}

export default ShoppingCartProductsReducer
