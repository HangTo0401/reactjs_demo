import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShoppingCartMessage from '../components/ShoppingCartMessage';

class MessageContainer extends Component {
    /**This component will go on Store to get state and give them to product component **/
    constructor(props) {
        super(props)
    }

    render() {
        var { message } = this.props
        return(
            <ShoppingCartMessage message={message}></ShoppingCartMessage>
        )
    }
}

MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
    return {
        message: state.MessageReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer)