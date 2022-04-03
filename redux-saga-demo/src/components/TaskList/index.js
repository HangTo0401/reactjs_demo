import { withStyles } from "@material-ui/core";
import styles from "./styles.js";
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TaskItem from "../TaskItem/index.js";
import PropTypes from "prop-types";
class TaskList extends Component {
  // Render list of tasks
  render() {
    const { classes, filteredTasks, status, onClickEdit, onClickDelete } = this.props;
    return (
      <Grid item md={4} xs={12} key={status?.value}>
        <Box mt={1} mb={1}>
          <div className={classes.status}>{status?.label}</div>
        </Box>
        <div className={classes.wrapperListTasks}>
          {filteredTasks.map((task) => {
            return <TaskItem key={task.id} task={task} status={status} onClickEdit={() => onClickEdit(task) } onClickDelete={() => onClickDelete(task)}/>;
          })}
        </div>
      </Grid>
    );
  }
}

TaskList.propTypes = {
  classes: PropTypes.object,
  filteredTasks: PropTypes.array,
  status: PropTypes.object,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func
}

export default withStyles(styles)(TaskList);
