import SortReducer from './SortReducer';
import StatusReducer from './StatusReducer';
import { combineReducers } from 'redux';

const myReducer = combineReducers({
    StatusReducer,
    SortReducer
});

export default myReducer;