import React, { Component } from 'react'
import {NavBar, Nav, NavItem} from 'react-bootstrap'
import styled from 'styled-components';

export class Header extends Component {
    constructor() {
        super();
        this.refName = React.createRef();
    }

    onAddProduct(params) {
        
    }

    render() {
        return (
            <StyledHeader>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-2'>
                            <Nav className='navbar navbar-inverse'>
                                <NavItem className='nav navbar-nav active'>
                                    Props
                                </NavItem>
                                <NavItem className='nav navbar-nav active'>
                                    Home
                                </NavItem>
                                <NavItem className='nav navbar-nav'>
                                    Menu
                                </NavItem>
                            </Nav>
                        </div>

                    </div>
                </div>
            </StyledHeader>
        )
    }
}

const StyledHeader = styled.div` background-color: #282c34; color: white; padding: 0px; `;

export default Header;
