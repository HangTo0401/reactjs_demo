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
                            <Nav className='navbar navbar-inverse'>
                                <NavItem>
                                    <NavLink exact='true' to='/' className='nav-link' activestyle={{ backgroundColor: 'white', color: 'red' }}>Home</NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink to='/about' className='nav-link' activestyle={{ backgroundColor: 'white', color: 'red' }}>About</NavLink>  
                                </NavItem>
                                <NavItem>
                                    <NavLink to='/contact' className='nav-link' activestyle={{ backgroundColor: 'white', color: 'red' }}>Contact</NavLink>
                                </NavItem>
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
