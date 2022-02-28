import { combineReducers } from 'redux';
import TasksReducer from './TasksReducer';
import DisplayFormReducer from './DisplayFormReducer';
import EditTaskReducer from './EditTaskReducer';
import FilterTaskReducer from './FilterTaskReducer';
import SearchTaskReducer from './SearchTaskReducer';
import SortTaskReducer from './SortTaskReducer';
import ShoppingCartProductsReducer from './ShoppingCartProductsReducer';
import ShoppingCartReducer from './ShoppingCartReducer';
import MessageReducer from './MessageReducer';
import ProductsReducer from './ProductsReducer';

const myReducer = combineReducers({
    TasksReducer, //TasksReducer: TasksReducer
    DisplayFormReducer, //DisplayFormReducer: DisplayFormReducer
    EditTaskReducer, //EditTaskReducer: EditTaskReducer
    FilterTaskReducer, //FilterTaskReducer: FilterTaskReducer
    SearchTaskReducer, //SearchTaskReducer: SearchTaskReducer
    SortTaskReducer, //SortTaskReducer: SortTaskReducer
    ShoppingCartProductsReducer, //ShoppingCartProductsReducer: ShoppingCartProductsReducer
    ShoppingCartReducer, //ShoppingCartReducer: ShoppingCartReducer
    MessageReducer, //MessageReducer: MessageReducer
    ProductsReducer //ProductsReducer: ProductsReducer
});

export default myReducer