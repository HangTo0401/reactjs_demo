import React, { Component } from "react";
import styles from "./styles.js";
import { withStyles } from "@material-ui/core";
import LoadingIcon from "./../../assets/images/loading.gif";
import { PropTypes } from "prop-types";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import * as uiActions from "./../../actions/uiActions";
class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let xHtml = null;
    if (showLoading) {
      xHtml = (
        <div >
            <h2>Loading</h2>
            <img src={LoadingIcon} alt="loading" className={classes.icon}/>
        </div>
      );
    }
    return xHtml;
  }
}

const mapStateToProps = (state) => {
  return {
    showLoading: state.uiReducer.showLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  // Use bindActionCreator to dispatch actions
  return {
    // now we have props uiActions
    uiActionsCreator: bindActionCreators(uiActions, dispatch)
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

GlobalLoading.propTypes = {
    classes: PropTypes.object,
    showLoading: PropTypes.bool,
}

export default compose(
  withStyles(styles),
  withConnect,
)(GlobalLoading); //resolve nested 
