import { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingCartProducts from '../components/ShoppingCartProducts';
import ShoppingCartProduct from '../components/ShoppingCartProduct';
import PropTypes from 'prop-types';
import * as actions from './../actions/index';
class ProductsContainer extends Component {
    /**This component will go on Store to get state and give them to product component **/
    constructor(props) {
        super(props)
    }
    
    showProducts = (products) => {
        var result = null
        var { onAddToCart, onChangeMessage } = this.props
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ShoppingCartProduct 
                            key={index} 
                            product={product} 
                            index={index} 
                            onAddToCart={onAddToCart} 
                            onChangeMessage={onChangeMessage}/>
            })
        }
        return result
    }

    render() {
        var { products } = this.props
        return(
            <ShoppingCartProducts>
                { this.showProducts(products) }
            </ShoppingCartProducts>
        );
    };
}

// Typechecking With PropTypes
ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            // Check properties of product
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        products: state.ShoppingCartProductsReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actions.addToCart(product, 1))
        },
        onChangeMessage: (message) => {
            dispatch(actions.changeMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)