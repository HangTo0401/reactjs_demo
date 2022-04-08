import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './../../../components/Dashboard';
class AdminLayoutRoute extends Component {
  renderHomePage(remainProps) {
    return(
      <Dashboard {...remainProps}>
        {this.props.component}
      </Dashboard>
    )
  }

  render() {
    const { component: YourComponent, ...remainProps } = this.props;
    console.log(this.props)
    return (
      <Routes>
        <Route
          exact={this.props.exact}
          path={this.props.path}
          name={this.props.name}
          element={this.renderHomePage(this.props)}
        />
      </Routes>
    );
  }
}

AdminLayoutRoute.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  name: PropTypes.string,
};

export default AdminLayoutRoute;
