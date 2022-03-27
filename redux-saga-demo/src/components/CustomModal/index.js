import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import styles from './styles.js';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from "../../actions/modalActions";
import CloseIcon from '@material-ui/icons/Clear';

class CustomModal extends Component {

  render() {
    const { classes, open, component, modalActionsCreators, title } = this.props
    const { hideModal } = modalActionsCreators
    return (
      <Modal open={open} onClose={hideModal} animation="false">
        <div className={classes.modal}>
          <div className={classes.header}>
            <Typography gutterBottom className={classes.title}>{title}</Typography>
            <CloseIcon className={classes.closeIcon} onClick={hideModal}/>
          </div>
          <div className={classes.content}>{component}</div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    open: state.modalReducer.showModal,
    title: state.modalReducer.title,
    onClose: state.modalReducer.hideModal,
    component: state.modalReducer.component,
    content: state.modalReducer.content
  };
}
  
const mapDispatchToProps = (dispatch) => {
  // Use bindActionCreator to dispatch actions
  return {
    modalActionsCreators: bindActionCreators(modalActions, dispatch)
  }
}

CustomModal.propsTypes = {
    classes: PropTypes.object,
    open: PropTypes.bool,
    title: PropTypes.string,
    modalActions: PropTypes.shape({
        hideModal: PropTypes.func
    }),
    component: PropTypes.object,
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withStyles(styles),
    withConnect,
  )(CustomModal); //resolve nested 
