import { combineReducers } from 'redux';
import TasksReducer from './TasksReducer';
import DisplayFormReducer from './DisplayFormReducer';
import EditTaskReducer from './EditTaskReducer';
import FilterTaskReducer from './FilterTaskReducer';
import SearchTaskReducer from './SearchTaskReducer';
import SortTaskReducer from './SortTaskReducer';

const myReducer = combineReducers({
    TasksReducer, //TasksReducer: TasksReducer
    DisplayFormReducer, //DisplayFormReducer: DisplayFormReducer
    EditTaskReducer, //EditTaskReducer: EditTaskReducer
    FilterTaskReducer, //FilterTaskReducer: FilterTaskReducer
    SearchTaskReducer, //SearchTaskReducer: SearchTaskReducer
    SortTaskReducer //SortTaskReducer: SortTaskReducer
});

export default myReducer