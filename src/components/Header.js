import React, { Component } from 'react'
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import Menu from './Menu';
import routes from './../routes';
export class Header extends Component {
    constructor() {
        super();
        this.refName = React.createRef();
    }

    showMenusContent = (routes) => {
        var result = null
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return(
                    <Route 
                        key={index} 
                        path={route.path}
                        exact={route.exact}
                        element={route.element}/>
                );
            })
        }
        return result
    }

    render() {
        return (
            <StyledHeader>
                <Router>
                    <Menu/>
                    <Routes>
                        { this.showMenusContent(routes) }
                    </Routes>
                </Router>
            </StyledHeader>
        )
    }
}

const StyledHeader = styled.div` background-color: #282c34; color: white; padding: 0px; `;

export default Header;
