import { Component } from 'react';
import { connect } from 'react-redux';

class ShoppingCartResult extends Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartResult)