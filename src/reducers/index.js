import { combineReducers } from 'redux';
import TasksReducer from './TasksReducer';
import DisplayFormReducer from './DisplayFormReducer';
import EditTaskReducer from './EditTaskReducer';
import FilterTaskReducer from './FilterTaskReducer';

const myReducer = combineReducers({
    TasksReducer, //TasksReducer: TasksReducer
    DisplayFormReducer, //DisplayFormReducer: DisplayFormReducer
    EditTaskReducer, //EditTaskReducer: EditTaskReducer
    FilterTaskReducer //FilterTaskReducer: FilterTaskReducer
});

export default myReducer