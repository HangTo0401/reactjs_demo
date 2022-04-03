import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return <div>Dashboard</div>;
  }
}

Dashboard.propTypes = {
};
  
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
)(Dashboard);
