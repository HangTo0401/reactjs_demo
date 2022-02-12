import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Products extends Component {
    
    render() {
        var products = [
            {
                id: 1,
                name: 'Iphone X',
                price: 350
            },
            {
                id: 2,
                name: 'Iphone 8 Plus',
                price: 450
            },
            {
                id: 3,
                name: 'Iphone 12 Pro max',
                price: 600
            }
        ]

        if (products.length > 0) {
            var match = this.props
            console.log(match)
            var result = products.map((product, index) => {
                return (
                    <NavLink to='' key={index}>
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
            </div>
        );
    };
}

export default Products