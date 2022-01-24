import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Routes
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return(
        <NavItem>
            <NavLink to={to} className='nav-link' exact={activeOnlyWhenExact}>{label}</NavLink>
        </NavItem>
    );
}
export class Header extends Component {
    constructor() {
        super();
        this.refName = React.createRef();
    }

    render() {
        return (
            <StyledHeader>
                <Router>
                    <div className='container-fluid'>
                        <div className='row'>
                            <Nav className='navbar-default'>
                                <MenuLink label='Home' to='/' activeOnlyWhenExact={true}></MenuLink>
                                <MenuLink label='About' to='/about' activeOnlyWhenExact={true}></MenuLink>
                                <MenuLink label='Contact' to='/contact' activeOnlyWhenExact={true}></MenuLink>
                            </Nav>
                        </div>
                    </div>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                    </Routes>
                </Router>
            </StyledHeader>
        )
    }
}

const StyledHeader = styled.div` background-color: #282c34; color: white; padding: 0px; `;

export default Header;
