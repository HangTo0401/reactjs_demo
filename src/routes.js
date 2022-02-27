import React from 'react'
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import NotFound from './components/NotFound';
import HomePage from './components/pages/HomePage';
import ProductItem from './components/ProductItem';
import NotFoundPage from './components/pages/NotFoundPage';
import ProductActionPage from './components/ProductActionPage/ProductActionPage';
import ProductListPage from './components/ProductListPage/ProductListPage';

const routes = [
    {
        path: '/',
        exact: 'true',
        element: <Home/>
    },
    {
        path: '/homepage',
        exact: 'false',
        element: <HomePage/>
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
        path: '/product-list',
        exact: 'false',
        element: <ProductListPage/>
    },
    {
        path: '/product/add',
        exact: 'false',
        element: <ProductActionPage/>
    },
    {
        path: '/products/:slug',
        exact: 'false',
        element: <ProductItem/>
    },
    {
        path: '/login',
        exact: 'false',
        element: <Login/>
    },
    {
        path: '/notfoundpage',
        exact: 'false',
        element: <NotFoundPage/>
    },
    {
        path: '/*',
        exact: 'false',
        element: <NotFound/>
    },
]

export default routes;