import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Reducers from './reducers';
import Middleware from './middleware';
import Sagas from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const listOfMiddleware = [
    ...Middleware,
    sagaMiddleware
];

// mount it on the Store
const Store = createStore(
    Reducers,
    applyMiddleware(...listOfMiddleware)
);

// then run the saga
sagaMiddleware.run(Sagas);

export {Store};