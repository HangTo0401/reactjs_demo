import { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingCartItem from './ShoppingCartItem';
import ShoppingCartResult from './ShoppingCartResult';
class ShoppingCart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <section className="section">
                    <div className="table-responsive">
                        <table className="table product-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Sản Phẩm</th>
                                    <th>Giá</th>
                                    <th>Số Lượng</th>
                                    <th>Tổng Cộng</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <ShoppingCartItem/>
                                <ShoppingCartItem/>
                                <ShoppingCartItem/>
                                <ShoppingCartResult/>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)