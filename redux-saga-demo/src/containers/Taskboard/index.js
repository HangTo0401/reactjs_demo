import './../../App.css';
import styles from './styles.js';
import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { STATUS } from '../../constants/index';

const listTasks = [
  {
    id: 0,
    title: "Read book",
    description: "Read Material UI book",
    status: 0
  },
  {
    id: 1,
    title: "Play games",
    description: "Play doraemon games",
    status: 2
  },
  {
    id: 2,
    title: "Do homework",
    description: "Do homework",
    status: 1
  }
];
class Taskboard extends Component {
  renderBoard() {
    const { classes } = this.props
    let xHtml = null
    xHtml = (
      <Grid container spacing={2}>
        {
          STATUS.map((status, index) => {
            const filteredTasks = listTasks.filter(task => task.status === status.value)
            return (
              <Grid item md={4} xs={12} key={status?.value}>
                <div className={classes.status}>{status?.label}</div>
                <div className={classes.wrapperListTasks}>
                  {
                    filteredTasks.map((task, index) => {
                      return (
                        <h1>{task.title}</h1>
                      );
                    })
                  }  
                </div>
              </Grid>
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