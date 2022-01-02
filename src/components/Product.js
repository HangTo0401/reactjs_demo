import React, { Component } from 'react'

class Product extends Component {
    onAddToCart(text) {
        alert(text);
    }

    constructor(props) {
        super(props)
        this.onAddToCart = this.onAddToCart.bind(this)
    }

    render() {
        return (
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <div className="thumbnail">
                <div className="caption">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.price}</p>
                    <img src={this.props.image}></img>
                    <button className="btn btn-primary" onClick={() => this.onAddToCart(this.props.name)}>Mua ngay</button>
                </div>
            </div>
        </div>
        );
    };
}

export default Product;