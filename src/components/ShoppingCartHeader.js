import { Component } from 'react';
import { connect } from 'react-redux';

class ShoppingCartHeader extends Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartHeader)