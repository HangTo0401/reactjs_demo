import { createStore, compose, applyMiddleware } from "redux"
import rootReducer from "../reducers";
import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './../sagas/index';

// Tạo Store tích hợp middleware và devtools
const composeEnhancers = process.env.NODE_ENV !== 'production' 
&& typeof window === 'object' 
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    shouldHotReload: false
}) : compose;

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    const middlewares = [thunk, sagaMiddleware]
    const enhancers = [
        applyMiddleware(...middlewares)
    ]
    const store = createStore(rootReducer, composeEnhancers(...enhancers));
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;
