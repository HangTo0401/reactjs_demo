import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
class ProductItem extends Component {
    onDelete = (id) => {
        if (confirm('Bạn có chắc chắn xóa sản phẩm này không ?')) { //eslint-disable-line
            this.props.onDelete(id)
        }
    }

    onEdit = (id) => {       
        this.props.navigate(`/product/${id}/edit`, {
            id: id
        })
    }

    render() {
        var { product, index } = this.props
        var statusName = product.status === true ? 'Còn hàng' : 'Hết hàng'
        var statusClass = product.status ? 'badge-warning' : 'badge-default'

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
                    <button className='btn btn-success' onClick={() => this.onEdit(product.id)}>Sửa</button>&nbsp;
                    <button className='btn btn-danger' onClick={() => this.onDelete(product.id)}>Xóa</button>
                </td>
            </tr>
        )
    }
}

function WithNavigate(props) {
    let navigate = useNavigate();
    return <ProductItem {...props} navigate={navigate} />
}

export default WithNavigate