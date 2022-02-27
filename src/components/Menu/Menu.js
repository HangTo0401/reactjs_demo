import React, { Component } from 'react';
import { Nav, NavLink, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './../../routes';

const menus = [
    {
        name: 'HomePage',
        to: '/homepage',
        exact: 'true'
    },
    {
        name: 'ProductList',
        to: '/product-list',
        exact: 'false'
    },
    {
        name: 'ProductActionPage',
        to: '/product/add',
        exact: 'false'
    },
    {
        name: 'NotFoundPage',
        to: '/notfoundpage',
        exact: 'false'
    }
]

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return(
        // <Routes>
        //     <Route path={to} exact={activeOnlyWhenExact} children={({match}) => {
        //         var active = match ? 'active' : ''
        //         return(
        //             <NavLink className={active} to={to}>{label}</NavLink>
        //         );
        //     }}>
        //     </Route>
        // </Routes>
        <NavItem>
            <NavLink to={to} exact={activeOnlyWhenExact}>{label}</NavLink>
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

    showRoutes = (routes) => {
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
        return(
            <Router>
                <div className='container-fluid'>
                    <div className='row'>
                        <Nav className='navbar-default'>
                            { this.showMenus(menus) }
                        </Nav>
                    </div>
                </div>
                <Routes>
                        { this.showRoutes(routes) }
                </Routes>
            </Router>
        )
    }
}

export default Menu