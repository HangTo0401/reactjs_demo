import { createStore } from 'redux';
import { status, sort } from './actions/index';
import myReducer from './reducers/index';

// Store controls all states
const store = createStore(myReducer);
console.log('Default ', store.getState())

// Change status
var action = { type: 'TOGGLE_STATUS' }
store.dispatch(status()) //updating a Redux store's state

// Implement sort name Z-A
var sortAction = {
    type: 'SORT',
    sort: {
        by: 'name',
        value: -1 // 1: increase, -1: decrease
    }
};

store.dispatch(sort({
    by: 'name',
    value: -1 // 1: increase, -1: decrease
})) //updating a Redux store's state