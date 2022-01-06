import { combineReducers } from 'redux';
import TasksReducer  from './TasksReducer';

const myReducer = combineReducers({
    TasksReducer //TasksReducer: TasksReducer
});

export default myReducer