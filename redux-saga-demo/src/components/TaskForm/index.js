import React, { Component } from 'react'
import { TextField, Typography, withStyles } from '@material-ui/core'
import styles from './styles.js'

import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import CloseIcon from '@material-ui/icons/Clear'
import PropTypes from 'prop-types'
class TaskForm extends Component {
  render() {
    const { classes, open, onClose } = this.props
    return (
      <Modal open={open} onClose={onClose} animation="false">
        <div className={classes.modal}>
          <form>
            <div className={classes.header}>
              <Typography gutterBottom className={classes.title}>Dialog Content</Typography>
              <CloseIcon className={classes.closeIcon} onClick={onClose}/>
            </div>
            
            <Grid container className={classes.container}>
              <Grid item md={12} className={classes.textField}>
                <TextField
                  id="standard-name"
                  label="Name"
                  margin="normal"
                ></TextField>
              </Grid>
              <Grid item md={12} className={classes.textField}>
                <TextField
                  id="standard-multiline-name"
                  label="Multiline"
                  multiline
                  margin="normal"
                ></TextField>
              </Grid>
              <Grid item md={12} className={classes.buttons}>
                <Box className={classes.box}>
                  <Button
                    onClick={onClose}
                    color="secondary"
                    variant="contained"
                    className={classes.cancelButton}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={onClose}
                    variant="contained"
                    className={classes.okButton}
                  >
                    Ok
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </div>
      </Modal>
    )
  }
}

TaskForm.propTypes = {
  open: PropTypes.bool,
  classes: PropTypes.object,
  onClose: PropTypes.func,
}

export default withStyles(styles)(TaskForm)
