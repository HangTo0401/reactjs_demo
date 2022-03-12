import './../../App.css';
import styles from './styles.js';
import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Typography, withStyles } from '@material-ui/core';
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
                <Box mt={1} mb={1}>
                  <div className={classes.status}>{status?.label}</div>
                </Box>
                <div className={classes.wrapperListTasks}>
                  {
                    filteredTasks.map((task) => {
                      const { title } = task
                      return (
                        <Card key={task.id} className={classes.card}>
                          <CardContent>
                            <Grid container justifyContent='space-between'>
                              <Grid item md={8}>
                                <Typography component='h2'>{title}</Typography>  
                              </Grid>
                              <Grid item md={4}>{status.label}</Grid>
                            </Grid>
                          </CardContent>
                          <CardActions>
                            <Button size="small"></Button>
                          </CardActions>
                        </Card>
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