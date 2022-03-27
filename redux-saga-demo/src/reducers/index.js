import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
    taskReducer, //taskReducer: taskReducer
    uiReducer //uiReducer: uiReducer
});

export default rootReducer;
