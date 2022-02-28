import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductItem from '../ProductItem/ProductItem';
import ProductList from './../ProductList/ProductList'
import { toast } from 'react-toastify';
import callApi from './../../utils/apiCaller';

import 'react-toastify/dist/ReactToastify.css';

 // toast-configuration method,
 // it is compulsory method.
toast.configure()
class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        callApi('GET', 'products', null).then(res => {
            if (res.status === 200) {
                this.setState({
                    products: res.data
                })
            }
        })
        .catch(res => {console.log(res)});
    };

    onDelete = (id) => {
        var { products } = this.state

        callApi('DELETE', `products/${id}`, null).then(res => {
            if (res.status === 200) { // OK
                var index = this.findIndex(products, id);
                if (index !== -1) {
                    products.splice(index, 1)
                    this.setState({
                        products: products
                    })
                }
                toast('Delete successfully!')
            }
        })
        .catch(res => {console.log(res)});
    }

    findIndex = (products, id) => {
        var result = -1;
        products.forEach((product, index) => {
            if (product.id === id) {
                result = index
            }
        });
        return result;
    }

    showProducts(products) {
        var result = null
        if (products.length > 0) {
            result = products.map((product, index) => {
                return(
                    <ProductItem key={index} product={product} index={index} onDelete={this.onDelete}/>
                );
            })
        }
        return result
    }

    onClick = () => {
        // Get it from props
        const { navigation } = this.props;
        navigation('/product/add')
    }
    
    render() {
        var { products } = this.state

        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <button type="button" className="btn btn-default" onClick={this.onClick}>Thêm sản phẩm</button>
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

// Wrap and export
const WithNavigate = (props) => {
    const navigation = useNavigate();
    return <ProductListPage {...props} navigation={navigation} />;
}

export default connect(mapStateToProps, null)(WithNavigate)