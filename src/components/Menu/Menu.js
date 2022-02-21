import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { BrowserRouter as Router, } from 'react-router-dom';
class Menu extends Component {
    render() {
        return(
            <Router>
                <div className='container-fluid'>
                    <div className='row'>
                        <Nav className='navbar-default'>
                            <a className="navbar-brand">Call API</a>
                            <a className="navbar-brand">Trang Chủ</a>
                            <a className="navbar-brand">Quản lí sản phẩm</a>
                        </Nav>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Menu