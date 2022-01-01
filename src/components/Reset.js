import { Component } from "react";

class Reset extends Component {
    constructor(props) {
        super(props)
    }

    onReset = () => {
        this.props.onSettingDefault(true)
    }

    render() {
        return(
            <button type="button" className="btn btn-primary reset-btn" onClick={ () => this.onReset() }>Reset</button>
        );
    };
}

export default Reset;