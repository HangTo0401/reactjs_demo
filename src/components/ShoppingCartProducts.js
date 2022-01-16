import { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingCartProduct from './ShoppingCartProduct';
class ShoppingCartProducts extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    <ShoppingCartProduct/>
                    <ShoppingCartProduct/>
                    <ShoppingCartProduct/>
                </div>
            </section>
        );
    };
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartProducts)