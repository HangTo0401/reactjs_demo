import { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingCartProducts from '../components/ShoppingCartProducts';
import ShoppingCartProduct from '../components/ShoppingCartProduct';
import PropTypes from 'prop-types';
class ProductsContainer extends Component {
    /**This component will go on Store to get state and give them to product component **/
    constructor(props) {
        super(props)
    }
    
    showProducts = (products) => {
        var result = null
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ShoppingCartProduct key={index} product={product}/>
            })
        }
        return result
    }

    render() {
        var { products } = this.props
        return(
            <div>
                <ShoppingCartProducts>
                    { this.showProducts(products) }
                </ShoppingCartProducts>
            </div>
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
    ).isRequired
}

const mapStateToProps = (state) => {
    return {
        products: state.ShoppingCartProductsReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)