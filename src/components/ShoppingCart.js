import { Component } from 'react';
import { connect } from 'react-redux';
class ShoppingCart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var { children } = this.props
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
                                { children }
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