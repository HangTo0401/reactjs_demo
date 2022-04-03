import React, { Component } from "react";

class Header extends Component {
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
)(Header);
