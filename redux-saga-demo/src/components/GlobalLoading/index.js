import React, { Component } from "react";
import styles from "./styles.js";
import { withStyles } from "@material-ui/core";
import LoadingIcon from "./../../assets/images/loading.gif";
import { PropTypes } from "prop-types";

class GlobalLoading extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div >
            <h2>Loading</h2>
            <img src={LoadingIcon} alt="loading" className={classes.icon}/>
        </div>
    );
  }
}

GlobalLoading.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(styles)(GlobalLoading);
