import './../../App.css';
import styles from './styles.js';
import React, { Component } from 'react';
import Taskboard from '../Taskboard';
import CustomModal from '../../components/CustomModal/index';
import GlobalLoading from '../../components/GlobalLoading/index';
import theme from './../../commons/theme';

import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore();
class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToastContainer/>
          <GlobalLoading/>
          <CustomModal/>
          <Taskboard/>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
