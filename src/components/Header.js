import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Route,
    Link,
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
                            <div className='col-md-2'>
                                <Nav className='navbar navbar-inverse'>
                                    <NavItem className='nav navbar-nav active'>
                                        <Link to="/">Home</Link>
                                    </NavItem>
                                    <NavItem className='nav navbar-nav'>
                                        <Link to="/about">About</Link>  
                                    </NavItem>
                                    <NavItem className='nav navbar-nav active'>
                                        <Link to="/contact">Contact</Link>
                                    </NavItem>
                                </Nav>
                            </div>
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
