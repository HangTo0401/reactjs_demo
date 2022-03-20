import { createStore, compose, applyMiddleware } from "redux"
import rootReducer from "../reducers";
import thunk from 'redux-thunk';

// Tạo Store tích hợp middleware và devtools
const composeEnhancers = process.env.NODE_ENV !== 'production' 
&& typeof window === 'object' 
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    shouldHotReload: false
}) : compose;

const configureStore = () => {
    const middlewares = [thunk]
    const enhancers = [
        applyMiddleware(...middlewares)
    ]
    const store = createStore(rootReducer, composeEnhancers(...enhancers));
    return store;
}

export default configureStore;