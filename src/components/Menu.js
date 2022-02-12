import { Component } from "react";
import { Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'About',
        to: '/about',
        exact: true
    },
    {
        name: 'Contact',
        to: '/contact',
        exact: true
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    var active = 'active';
    return(
        <NavItem>
            <NavLink to={to} className={`nav-link ${active}`} exact={activeOnlyWhenExact}>{label}</NavLink>
        </NavItem>
    );
}

class Menu extends Component {
    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink 
                    key={index} 
                    label={menu.name} 
                    to={menu.to} 
                    activeOnlyWhenExact={menu.exact}></MenuLink>
                )
            })
        }
        return result;
    }

    render() {
        return(
            <div className='container-fluid'>
            <div className='row'>
                <Nav className='navbar-default'>
                    { this.showMenus(menus) }
                </Nav>
            </div>
            </div>
        )
    }
}

export default Menu