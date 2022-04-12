import React, { Component } from "react";
import { withStyles } from '@material-ui/core';
import styles from './styles.js';
import { connect } from 'react-redux';
import { compose } from 'redux';
class Sidebar extends Component {
  render() {
    return (
      <div>Sidebar</div>
    );
  }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);
  
export default compose(
    withConnect,
    withStyles(styles),
)(Sidebar);
