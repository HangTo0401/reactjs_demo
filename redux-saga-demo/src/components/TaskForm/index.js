import React, { Component } from 'react';
import { TextField, withStyles } from '@material-ui/core';
import styles from './styles.js';
import validate from './validate';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from "../../actions/modalActions";
import * as constants from "./../../constants/index";
import { reduxForm, Field } from 'redux-form';
import renderTextField from '../FormHelper/TextField/index.js';

class TaskForm extends Component {
  handleSubmitForm = (data) => {
    console.log(data)
    return data
  }

  renderStatusSelection() {
    let xhtml = null;
    const { taskEditing, classes } = this.props;
    if (taskEditing && taskEditing.id) {
      xhtml = (
        <Field
          id="status"
          label="Status"
          className={classes.select}
          name="status"
          component={renderSelectField}
        >
          <MenuItem value={0}>Ready</MenuItem>
          <MenuItem value={1}>In Progress</MenuItem>
          <MenuItem value={2}>Completed</MenuItem>
        </Field>
      );
    }
    return xhtml;
  }

  render() {
    const { classes, handleSubmit, modalActionsCreators, invalid, submitting } = this.props
    const { hideModal } = modalActionsCreators
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container className={classes.container}>
          <Grid item md={12} className={classes.textField}>
            <Field
              id="title"
              label="Title"
              className={classes.textField}
              margin="normal"
              name="title"
              component={renderTextField}
              placeholder="Please input title..."
            />  
          </Grid>

          <Grid item md={12} className={classes.textField}>
            <Field
              id="description"
              label="Description"
              multiline
              rowsMax="4"
              className={classes.textField}
              margin="normal"
              name="description"
              component={renderTextField}
            />
          </Grid>
          {this.renderStatusSelection()}
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
  form: constants.FORM_NAME,
  validate,
});

TaskForm.propTypes = {
  classes: PropTypes.object,
  onClose: PropTypes.func,
}

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(TaskForm); //resolve nested 
