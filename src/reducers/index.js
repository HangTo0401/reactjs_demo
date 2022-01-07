import { combineReducers } from 'redux';
import TasksReducer  from './TasksReducer';
import DisplayFormReducer  from './DisplayFormReducer';

const myReducer = combineReducers({
    TasksReducer, //TasksReducer: TasksReducer
    DisplayFormReducer //DisplayFormReducer: DisplayFormReducer
});

export default myReducer