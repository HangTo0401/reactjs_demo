import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from './styles.js';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from "./../../actions/modalActions";

class Modal extends Component {
  render() {
    const { classes, open, onClose, component, modalActionsCreators } = this.props
    const { hideModal } = modalActionsCreators
    return (
        <Modal open={open} onClose={hideModal} animation="false">
            <div className={classes.modal}>
                <div className={classes.header}>
                    <Typography gutterBottom className={classes.title}>Add new task</Typography>
                    <CloseIcon className={classes.closeIcon} onClick={onClose}/>
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

Modal.propsTypes = {
    classes: PropTypes.object,
    open: PropTypes.bool,
    modalActions: PropTypes.shape({
        hideModal: PropTypes.func
    }),
    component: PropTypes.object,
}

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
)(Modal);
