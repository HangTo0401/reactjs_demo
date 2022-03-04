import './../../App.css';
import styles from './styles.js';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

import React, { Component } from 'react'

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className="App">
        <h2>Hello Redux Saga</h2>
        <Button variant='contained' color='primary'>Lưu</Button>
        <div className={classes.box}>
          <div className={classes.shape}>REACTJS</div>
          <div className={classes.shape}>ANGULARJS</div>
          <div className={classes.shape}>VUEJS</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
