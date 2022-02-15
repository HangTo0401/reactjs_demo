import React from 'react'
import { NavLink } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import ProductItem from './ProductItem'
import { useLocation } from 'react-router-dom';

export default function Products() {
    const location = useLocation();

    var products = [
        {
            id: 1,
            slug: 'IphoneX',
            name: 'Iphone X',
            price: 350
        },
        {
            id: 2,
            slug: 'Iphone8',
            name: 'Iphone 8 Plus',
            price: 450
        },
        {
            id: 3,
            slug: 'Iphone12',
            name: 'Iphone 12 Pro max',
            price: 600
        }
    ]

    if (products.length > 0) {
        var result = products.map((product, index) => {
            return (
                <NavLink to={`${location.pathname}/${product.slug}`} key={index}>
                    <li>
                        { product.id } - { product.name } - { product.price }
                    </li>
                </NavLink>
            )
        });
    }

    return (
        <div className='container'>
            <h2>Danh sách sản phẩm</h2>
            <div className='row'>
                <ul className='list-group'>
                    { result }
                </ul>
            </div>

            <div className='row'>
                <Routes>
                    <Route path='/products/1' exact='false' element={<ProductItem/>}/>
                </Routes>
            </div>
        </div>
    );
}