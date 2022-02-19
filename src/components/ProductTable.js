import React, { Component } from 'react'

class ProductTable extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <button type="button" className="btn btn-default">Thêm sản phẩm</button>
                        <br/>

                        <div className="panel panel-primary">
                            <div className="panel-heading">
                            <h3 className="panel-title">Danh sách sản phẩm</h3>
                            </div>
                            <div className="panel-body">
                            
                            <table className="table table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Mã sản phẩm</th>
                                    <th>Tên sản phẩm</th>
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
                                    <button className='btn-success'>Sửa</button>&nbsp;
                                    <button className='btn-danger'>Xóa</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        )
    }
}

export default ProductTable