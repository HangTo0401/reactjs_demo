import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShoppingCart from '../components/ShoppingCart';
import ShoppingCartItem from '../components/ShoppingCartItem';
import ShoppingCartResult from '../components/ShoppingCartResult';
import * as Message from './../constants/Messages';
class CartContainer extends Component {
    /**This component will go on Store to get state and give them to product component **/
    constructor(props) {
        super(props)
    }

    showCartItems = (cart) => {
        var result = null
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <ShoppingCartItem key={index} item={item} index={index}/>
            })
        }
        return result
    }

    showTotalAmount = (cart) => {
        var result = null
        if (cart.length > 0) {
            result = <ShoppingCartResult cart={cart}/>
        }
        return result
    }

    render() {
        var { cart } = this.props
        return(
            <ShoppingCart>
                { this.showCartItems(cart) }
                { this.showTotalAmount(cart) }
            </ShoppingCart>
        );
    };
}

// Typechecking With PropTypes
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            // Check properties of product
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }),
        quantity: PropTypes.number.isRequired
    })
    ).isRequired
}

const mapStateToProps = (state) => {
    return {
        cart: state.ShoppingCartReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)