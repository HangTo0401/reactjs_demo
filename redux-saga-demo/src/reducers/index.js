import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import uiReducer from './uiReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
    taskReducer, //taskReducer: taskReducer
    uiReducer, //uiReducer: uiReducer
    modalReducer
});

export default rootReducer;
