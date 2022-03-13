import React, { Component } from "react";
import { TextField, Typography, withStyles } from "@material-ui/core";
import styles from "./styles.js";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

class TaskForm extends Component {
  render() {
    const { classes, open, onClose } = this.props
    return (
        <Dialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={onClose}>
          Add New Task
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>Dialog Content</Typography>
          <TextField id='standard-name' label='Name' className={classes.textField} margin='normal'></TextField>
          <TextField id='standard-multiline-name' label='Multiline' multiline className={classes.textField} margin='normal'></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color='secondary' variant='contained'>Cancel</Button>
          <Button onClick={onClose} variant='contained' className={classes.okButton}>Ok</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(TaskForm);
