import { combineReducers } from 'redux';
import TasksReducer from './TasksReducer';
import DisplayFormReducer from './DisplayFormReducer';
import EditTaskReducer from './EditTaskReducer';
import FilterTaskReducer from './FilterTaskReducer';
import SearchTaskReducer from './SearchTaskReducer';
import SortTaskReducer from './SortTaskReducer';
import ShoppingCartProductsReducer from './ShoppingCartProductsReducer';
import ShoppingCartReducer from './ShoppingCartReducer';

const myReducer = combineReducers({
    TasksReducer, //TasksReducer: TasksReducer
    DisplayFormReducer, //DisplayFormReducer: DisplayFormReducer
    EditTaskReducer, //EditTaskReducer: EditTaskReducer
    FilterTaskReducer, //FilterTaskReducer: FilterTaskReducer
    SearchTaskReducer, //SearchTaskReducer: SearchTaskReducer
    SortTaskReducer, //SortTaskReducer: SortTaskReducer
    ShoppingCartProductsReducer, //ShoppingCartProductsReducer: ShoppingCartProductsReducer
    ShoppingCartReducer //ShoppingCartReducer: ShoppingCartReducer
});

export default myReducer