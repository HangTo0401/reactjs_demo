import './../../App.css';
import styles from './styles.js';
import React, { Component } from 'react';

import { withStyles } from '@material-ui/core';

class Taskboard extends Component {
  render() {
    const { classes } = this.props
    return ( 
      <div className={classes.taskboard}>
        <h2>Taskboard</h2>
        <div className={classes.shape}>REACTJS</div>
        <div className={classes.shape}>ANGULARJS</div>
        <div className={classes.shape}>VUEJS</div>
      </div>
    );
  }
}

export default withStyles(styles)(Taskboard);