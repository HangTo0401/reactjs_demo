import React, { Component } from 'react';
class ProductItem extends Component {
    render() {
        var { product, index } = this.props
        var statusName = product.status === true ? 'Còn hàng' : 'Hết hàng'
        var statusClass = product.status ? 'badge-warning' : 'badge-default'
        console.log(statusName)
        return(
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label-${statusClass}`}>{statusName}</span>
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