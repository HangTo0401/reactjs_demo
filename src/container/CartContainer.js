import { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingCartProducts from '../components/ShoppingCartProducts';
import ShoppingCartProduct from '../components/ShoppingCartProduct';
import PropTypes from 'prop-types';
class CartContainer extends Component {
    /**This component will go on Store to get state and give them to product component **/
    constructor(props) {
        super(props)
    }

    render() {
        var { cart } = this.props
        console.log(cart)
        return(
            <div></div>
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