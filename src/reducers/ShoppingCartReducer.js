import * as types from '../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('cart'));
var initialState = [
    {
        product: {
            id: 1,
            name: 'Iphone 7 Plus',
            image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
            description: 'Sản phẩm do Apple sản xuất',
            price: 120,
            inventory: 10,
            rating: 4
        },
        quantity: 5
    },
    {
        product: {
            id: 2,
            name: 'Iphone 8',
            image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
            description: 'Sản phẩm do Apple sản xuất',
            price: 150,
            inventory: 5,
            rating: 3
        },
        quantity: 2
    },
    {
        product: {
            id: 3,
            name: 'Iphone 8 Plus',
            image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
            description: 'Sản phẩm do Apple sản xuất',
            price: 170,
            inventory: 20,
            rating: 5
        },
        quantity: 3
    },
    {
        product: {
            id: 4,
            name: 'Iphone X',
            image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
            description: 'Sản phẩm do Apple sản xuất',
            price: 200,
            inventory: 20,
            rating: 5
        },
        quantity: 6
    },
]

var ShoppingCartReducer = (state = initialState, action) => {
    var { product, quantity } = action
    var index = -1
    switch(action.type) {
        case types.ADD_TO_CART:
            index = findProductInCart(state, product)
            if (index !== -1) {
                state[index].quantity += quantity
            } else {
                state.push({
                    product, 
                    quantity
                })
            }

            localStorage.setItem('cart', JSON.stringify(state))
            return [...state]
        default: return [...state]
    }
}

var findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index
}

export default ShoppingCartReducer