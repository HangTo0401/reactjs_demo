import './../../App.css';
import styles from './styles.js';
import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { STATUS } from '../../constants/index';
import { PropTypes } from 'prop-types';

import TaskList from '../../components/TaskList/index';
import TaskForm from '../../components/TaskForm/index';

const listTasks = [
  {
    id: 0,
    title: 'Read book',
    description: 'Read Material UI book',
    status: 0
  },
  {
    id: 1,
    title: 'Play games',
    description: 'Play doraemon games',
    status: 2
  },
  {
    id: 2,
    title: 'Do homework',
    description: 'Do homework',
    status: 1
  }
];
class Taskboard extends Component {
  state = {
    open: false
  };

  openForm = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  renderForm() {
    const { open } = this.state;
    let xHtml = null;
    xHtml = (
      <TaskForm open={open} onClose={this.handleClose}/>
    );
    return xHtml;
  }

  renderBoard() {
    let xHtml = null;
    xHtml = (
      <Grid container spacing={2}>
        {
          STATUS.map((status, index) => {
            const filteredTasks = listTasks.filter(task => task.status === status.value);
            return (
              <TaskList key={status.value} filteredTasks={filteredTasks} status={status}/>
            );
          })
        }
      </Grid>
    );
    return xHtml;
  }

  render() {
    const { classes } = this.props;
    return ( 
      <div className={classes.taskBoard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon />
          Add new task
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

Taskboard.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Taskboard);