import { Component } from "react";

class SizeSetting extends Component {
    constructor(props) {
        super(props)
    }

    changeSize(value) {
        this.props.onReceiceSize(value)
    }

    render() {
        return(
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size : { this.props.fontSize }</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success" onClick={ () => this.changeSize(-2) }>Giảm</button>&nbsp;
                    <button type="button" className="btn btn-success" onClick={ () => this.changeSize(+2) }>Tăng</button>
                </div>
            </div>
        );
    };
}

export default SizeSetting;