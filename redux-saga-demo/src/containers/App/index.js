import './../../App.css';
import styles from './styles.js';
import React, { Component } from 'react';
import Taskboard from '../Taskboard';
import CustomModal from '../../components/CustomModal/index';
import GlobalLoading from '../../components/GlobalLoading/index';
import theme from './../../commons/theme';
import { ROUTES } from '../../constants/index';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Router } from 'react-router-dom';
import AdminLayoutRoute from '../../commons/layout/AdminLayoutRoute/index';

const store = configureStore();
class App extends Component {
  renderRoutes() {
    let xHtml = null
    xHtml = ROUTES.map((route, index) => {
      return <AdminLayoutRoute key={index} route={route} />
    })

    return xHtml;
  }

  render() {
    const { classes } = this.props
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <ToastContainer/>
            <GlobalLoading/>
            <CustomModal/>
            {/* <Taskboard/> */}
            <Router>
              {this.renderRoutes()}
            </Router>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
