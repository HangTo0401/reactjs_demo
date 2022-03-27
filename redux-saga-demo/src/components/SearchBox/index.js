import React, { Component } from "react";
import styles from "./styles.js";
import { withStyles } from '@material-ui/core';
import PropTypes from "prop-types";
import Form from "@material-ui/core/FormGroup";
import TextField from '@material-ui/core/TextField';
class SearchBox extends Component {
  render() {
    const { classes, handleChange } = this.props
    return (
        <Form className={classes.container} autoComplete="off" noValidate>
            <TextField
                id="standard-name"
                label="Name"
                className={classes.textField}
                onChange={handleChange}
                margin="normal"
                placeholder="Please input in search box..."
            />
        </Form>
    );
  }
}

SearchBox.propsTypes = {
    classes: PropTypes.object,
    handleChange: PropTypes.func
}

export default withStyles(styles)(SearchBox);
