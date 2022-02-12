import React, { Component } from 'react'
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
export class Header extends Component {
    constructor() {
        super();
        this.refName = React.createRef();
    }

    render() {
        return (
            <StyledHeader>
                <Router>
                    <Menu/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </Router>
            </StyledHeader>
        )
    }
}

const StyledHeader = styled.div` background-color: #282c34; color: white; padding: 0px; `;

export default Header;
