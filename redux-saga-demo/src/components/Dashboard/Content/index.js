import React, { Component } from "react";
import { withStyles } from '@material-ui/core';
import styles from './styles.js';
import { compose } from 'redux';

class Content extends Component {
  render() {
    return <div>Header</div>;
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
)(Content);
