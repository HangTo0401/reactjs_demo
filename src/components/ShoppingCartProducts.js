import { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingCartProduct from './ShoppingCartProduct';
class ShoppingCartProducts extends Component {
    constructor(props) {
        super(props)
    }

    showProducts = (products) => {
        var result = null
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ShoppingCartProduct key={index}/>
            })
        }
        return result
    }

    render() {
        var { products } = this.props
        return(
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    { this.showProducts(products) }
                </div>
            </section>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        products: state.ShoppingCartProductsReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartProducts)