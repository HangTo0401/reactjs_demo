import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return <div>index</div>;
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
