import { Component } from 'react';
import { connect } from 'react-redux';

class ShoppingCartMessage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var { message } = this.props
        return(
            <div>
                <h3>
                    <span className="badge amber darken-2">{ message }</span>
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