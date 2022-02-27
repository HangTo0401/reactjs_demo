import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return(
            <div className='panel-primary'>
                <div className='panel-heading'>
                    <h3 className='panel-title'>Danh sách sản phẩm</h3>
                </div>
                <div className='panel-body'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã</th>
                                <th>Tên</th>
                                <th>Giá</th>
                                <th>Trạng thái</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
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
                        </tbody>
                    </table>
                    
                </div>
            </div>
        )
    }
}

export default ProductList