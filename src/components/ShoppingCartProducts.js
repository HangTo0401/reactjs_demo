import { Component } from 'react';
import { connect } from 'react-redux';

class ShoppingCartProducts extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div></div>
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