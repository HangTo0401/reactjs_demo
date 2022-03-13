import { withStyles } from "@material-ui/core";
import styles from "./styles.js";
import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TaskItem from "../TaskItem/index.js";

class TaskList extends Component {
  // Render list of tasks
  render() {
    const { classes, filteredTasks, status } = this.props;
    return (
      <Grid item md={4} xs={12} key={status?.value}>
        <Box mt={1} mb={1}>
          <div className={classes.status}>{status?.label}</div>
        </Box>
        <div className={classes.wrapperListTasks}>
          {filteredTasks.map((task) => {
            return <TaskItem key={task.id} task={task} status={status} />;
          })}
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);
