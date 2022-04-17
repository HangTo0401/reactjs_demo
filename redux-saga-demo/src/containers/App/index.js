import './../../App.css';
import styles from './styles.js';
import React, { Component } from 'react';
import CustomModal from '../../components/CustomModal/index';
import GlobalLoading from '../../components/GlobalLoading/index';
import theme from './../../commons/theme';
import { ADMIN_ROUTES } from '../../constants/index';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AdminLayoutRoute from './../../commons/layout/AdminLayoutRoute/index';

const store = configureStore();
class App extends Component {
  renderAdminRoutes() {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map(route => {
      return (
        <AdminLayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      );
    });
    return xhtml;
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ToastContainer />
            <GlobalLoading />
            <CustomModal />
            {/* <Routes> */}
              {this.renderAdminRoutes()}
             {/* </Routes> */}
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
