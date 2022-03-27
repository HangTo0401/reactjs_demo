import React, { Component } from 'react';
import { TextField, withStyles } from '@material-ui/core';
import styles from './styles.js';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from "../../actions/modalActions";
import * as constants from "./../../constants/index";
import { reduxForm, Field } from 'redux-form';
class TaskForm extends Component {
  handleSubmitForm = (data) => {
    console.log(data)
    return data
  }

  render() {
    const { classes, handleSubmit, modalActionsCreators } = this.props
    const { hideModal } = modalActionsCreators
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container className={classes.container}>
          <Grid item md={12} className={classes.textField}>
            <Field name="title" component="input" placeholder="Please input..." />
          </Grid>

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
                onClick={hideModal}
                color="secondary"
                variant="contained"
                className={classes.cancelButton}
              >
                Cancel
              </Button>
              <Button
                onClick={hideModal}
                variant="contained"
                className={classes.okButton}
                type="submit"
              >
                Ok
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  // Use bindActionCreator to dispatch actions
  return {
    modalActionsCreators: bindActionCreators(modalActions, dispatch)
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReduxForm = reduxForm({
  form: constants.FORM_NAME
})

TaskForm.propTypes = {
  classes: PropTypes.object,
  onClose: PropTypes.func,
}

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(TaskForm); //resolve nested 
