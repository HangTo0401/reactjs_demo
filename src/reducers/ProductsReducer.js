var initialState = [{
        id: 1,
        name: 'Iphone 6 plus',
        price: 400,
        status: true
    },
    {
        id: 2,
        name: 'Iphone 7 plus',
        price: 600,
        status: true
    },
    {
        id: 3,
        name: 'Iphone X',
        price: 700,
        status: true
    }
];

const ProductsReducer = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state]
    }
}

export default ProductsReducer