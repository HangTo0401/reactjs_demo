import { Component } from 'react';
import { connect } from 'react-redux';
import * as messages from '../constants/Messages';
class ShoppingCartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
    }

    showSubTotal = (price, qty) => {
        return price * qty
    }

    onDeleteProductInCart = (product) => {
        this.props.onDeleteProductInCart(product)
        this.props.onChangeMessage(messages.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
    }

    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            this.setState({
                quantity: quantity
            })
            this.props.onUpdateProductInCart(product, quantity)
        }
    }

    render() {
        var { item } = this.props
        console.log(item.quantity)
        var { quantity } = item.quantity > 0 ? item : this.state;
        return(
            <tr>
                <th scope="row">
                    <img src={ item.product.image }
                        alt={ item.product.name } className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{ item.product.name }</strong>
                    </h5>
                </td>
                <td>{ item.product.price }$</td>
                <td className="center-on-small-only">
                    <span className="qty">{ quantity }</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label onClick={() => this.onUpdateQuantity(item.product, quantity - 1)}
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a>—</a>
                        </label>
                        <label onClick={() => this.onUpdateQuantity(item.product, quantity + 1)}
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{ this.showSubTotal(item.product.price, item.quantity) }$</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item" onClick={() => this.onDeleteProductInCart(item.product) }>
                        X
                    </button>
                </td>
            </tr>
        );
    };
}

export default ShoppingCartItem