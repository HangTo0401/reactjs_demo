import React, { Component } from 'react';
class ProductItem extends Component {
    render() {
        return(
            <tr>
                <td>1</td>
                <td>#123456</td>
                <td>Iphone 12</td>
                <td>500$</td>
                <td>
                    <span className='badge-warning'>Còn hàng</span>
                </td>
                <td>
                    <button className='btn btn-success'>Sửa</button>&nbsp;
                    <button className='btn btn-danger'>Xóa</button>
                </td>
            </tr>
        )
    }
}

export default ProductItem