import { Component } from 'react';
import ShoppingCartProduct from './ShoppingCartProduct';
class ShoppingCartProducts extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var { children } = this.props
        return(
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    { children }
                </div>
            </section>
        );
    };
}

export default ShoppingCartProducts