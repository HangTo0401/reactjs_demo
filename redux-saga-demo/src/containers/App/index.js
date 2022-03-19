import './../../App.css';
import styles from './styles.js';
import React, { Component } from 'react';
import Taskboard from '../Taskboard';
import theme from './../../commons/theme';

import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
class App extends Component {
  var test = null
  render() {
    const { classes } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Taskboard/>  
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
