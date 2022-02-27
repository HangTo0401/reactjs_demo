import React, { Component } from 'react';
import { Nav, NavLink, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Home from '../../components/Home';
import NotFoundPage from '../pages/NotFoundPage';
class Menu extends Component {
    render() {
        return(
            <Router>
                <div className='container-fluid'>
                    <div className='row'>
                        <Nav className='navbar-default'>
                            <a className="navbar-brand">Call API</a>
                            <NavLink to='/homepage'>Trang Chủ</NavLink>
                            <NavLink to='/notfoundpage'>Quản lí sản phẩm</NavLink>
                        </Nav>
                    </div>
                </div>
                <Routes>
                    <Route path='/' exact element={<Home/>}></Route>
                    <Route path='/homepage' exact element={<HomePage/>}></Route>
                    <Route path='/notfoundpage' element={<NotFoundPage/>}></Route>
                </Routes>
            </Router>
        )
    }
}

export default Menu