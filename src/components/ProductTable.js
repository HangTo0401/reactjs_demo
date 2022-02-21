import React, { Component } from 'react'
import ProductList from './ProductList/ProductList'

class ProductTable extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <button type="button" className="btn btn-default">Thêm sản phẩm</button>
                        <br/>
                        <ProductList/>
                    </div>
                </div>
          </div>
        )
    }
}

export default ProductTable