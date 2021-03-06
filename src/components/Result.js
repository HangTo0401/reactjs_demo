import { Component } from 'react';

class Result extends Component {
    constructor(props) {
        super(props)
    }

    setStyle() {
        return {
            borderColor: this.props.color,
            fontSize: this.props.fontSize
        };
    }

    render() {
        return(
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                <p>Color : { this.props.color } - Font size : { this.props.fontSize}</p>
                <div id='content' style = { this.setStyle() }>
                    Setting content
                </div>
            </div>
        );
    };
}

export default Result;