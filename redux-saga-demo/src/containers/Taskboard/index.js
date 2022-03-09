import './../../App.css';
import styles from './styles.js';
import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { STATUS } from '../../constants/index';
class Taskboard extends Component {
  renderBoard() {
    let xHtml = null
    xHtml = (
      <Grid container spacing={2}>
        {
          STATUS.map((status, index) => {
            return (
              <Grid item md={4} xs={12} key={index}>{status?.label}</Grid>
            );
          })
        }
      </Grid>
    );
    return xHtml
  }

  render() {
    const { classes } = this.props
    return ( 
      <div className={classes.taskBoard}>
        <Button variant='contained' color='primary' className={classes.button}>
          <AddIcon/>Add new task
        </Button>
        {this.renderBoard()}
      </div>
    );
  }
}

export default withStyles(styles)(Taskboard);