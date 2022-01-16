import { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingCartItem from './ShoppingCartItem';
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
                                <tr>
                                    <td colSpan="3"></td>
                                    <td>
                                        <h4>
                                            <strong>Tổng Tiền</strong>
                                        </h4>
                                    </td>
                                    <td>
                                        <h4>
                                            <strong>15$</strong>
                                        </h4>
                                    </td>
                                    <td colSpan="3">
                                        <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                                            <i className="fa fa-angle-right right"></i>
                                        </button>
                                    </td>
                                </tr>
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