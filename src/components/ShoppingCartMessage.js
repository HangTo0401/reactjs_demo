import { Component } from 'react';
import { connect } from 'react-redux';

class ShoppingCartMessage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <h3>
                    <span className="badge amber darken-2">Mua Hàng Thành Công !</span>
                </h3>
            </div>
        );

    };
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartMessage)