import React, { Component } from 'react'
import ProductItem from '../ProductItem/ProductItem';
import ProductList from './../ProductList/ProductList'
import { connect } from 'react-redux';
import axios from 'axios';
class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        return axios({
            method: 'get',
            url: 'http://localhost:3000/products',
            data: null
        })
        .then(res => {
            if (res.status === 200) {
                this.setState({
                    products: res.data
                })
            }
        })
        .catch(res => {console.log(res)});
    };

    showProducts(products) {
        var result = null
        if (products.length > 0) {
            result = products.map((product, index) => {
                return(
                    <ProductItem key={index} product={product} index={index} />
                );
            })
        }
        return result
    }
    
    render() {
        var { products } = this.state

        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <button type="button" className="btn btn-default">Thêm sản phẩm</button>
                        <br/>
                        <ProductList>
                            {this.showProducts(products)}
                        </ProductList>
                    </div>
                </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        products: state.ProductsReducer
    };
}

export default connect(mapStateToProps, null)(ProductListPage)