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
import SearchBox from '../../components/SearchBox/index';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from './../../actions/taskActions';
import * as modalActions from './../../actions/modalActions';
class Taskboard extends Component {
  state = {
    open: false
  };

  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTasksRequest } = taskActionCreators;

    // call fetchListTasks function in taskActions.js
    fetchListTasksRequest(); 
  }

  openForm = () => {
    const { modalActionsCreators, taskActionCreators } = this.props
    const { setTaskEditingActions } = taskActionCreators;
    const { showModal, changeModalTitle, changeModalContent } = modalActionsCreators
    setTaskEditingActions(null)
    showModal()
    changeModalTitle('Add new task')
    changeModalContent(<TaskForm/>)
  };

  // renderForm() {
  //   const { open } = this.state;
  //   let xHtml = null;
  //   xHtml = (
  //     <TaskForm open={open} onClose={this.handleClose}/>
  //   );
  //   return xHtml;
  // }

  handleEditTask = task => {
    const { modalActionsCreators, taskActionCreators } = this.props
    const { showModal, changeModalTitle, changeModalContent } = modalActionsCreators
    const { setTaskEditingActions } = taskActionCreators;
    setTaskEditingActions(task)
    showModal()
    changeModalTitle('Update task')
    changeModalContent(<TaskForm/>)
  }

  handleFilter = (event) => {
    const { value } = event.target;
    const { taskActionCreators } = this.props
    const { filterTask } = taskActionCreators;
    filterTask(value)
  }

  renderSearchBox() {
    let xHtml = null;
    xHtml = (
      <SearchBox handleChange={this.handleFilter}/>
    );
    return xHtml;
  }

  renderBoard() {
    const { listTasks } = this.props
    let xHtml = null;
    xHtml = (
      <Grid container spacing={2}>
        {
          STATUS.map((status, index) => {
            const filteredTasks = listTasks.filter(task => task.status === status.value);
            return (
              <TaskList 
                key={status.value} 
                filteredTasks={filteredTasks} 
                status={status} 
                onClickEdit={this.handleEditTask}/>
            );
          })
        }
      </Grid>
    );
    return xHtml;
  }

  loadData = () => {
    const { taskActionCreators } = this.props;
    const { fetchListTasksActions } = taskActionCreators;

    // call fetchListTasks function in taskActions.js
    fetchListTasksActions();
  }

  render() {
    const { classes } = this.props;
    return ( 
      <div className={classes.taskBoard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.loadData}
          style={{marginRight: "20px"}}
        >
          Load Data
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon />
          Add new task
        </Button>
        {this.renderSearchBox()}
        {this.renderBoard()}
        {/* {this.renderForm()} */}
      </div>
    );
  }
}

Taskboard.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTasks: PropTypes.func,
    filterTask: PropTypes.func,
    setTaskEditingActions: PropTypes.func
  }),
  listTasks: PropTypes.array,
  modalActionsCreators: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func
  }),
};

const mapStateToProps = (state) => {
  return {
    listTasks: state.taskReducer.listTasks
  };
}

const mapDispatchToProps = (dispatch) => {
  // Use bindActionCreator to dispatch actions
  return {
    // now we have props taskActions
    taskActionCreators: bindActionCreators(taskActions, dispatch),
    modalActionsCreators: bindActionCreators(modalActions, dispatch)
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Taskboard));
