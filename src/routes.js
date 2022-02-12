import React from 'react'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import NotFound from './components/NotFound';

const routes = [
    {
        path: '/',
        exact: 'true',
        element: <Home/>
    },
    {
        path: '/about',
        exact: 'false',
        element: <About/>
    },
    {
        path: '/contact',
        exact: 'false',
        element: <Contact/>
    },
    {
        path: '/products',
        exact: 'false',
        element: <Products/>
    },
    {
        path: '*',
        exact: 'false',
        element: <NotFound/>
    },
]

export default routes;