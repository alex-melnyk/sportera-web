import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Reducers from './reducers';
import Middleware from './middleware';
import Sagas from './sagas';

const persistedReducer = persistReducer({
    key: 'root',
    storage,
    whitelist: ['auth']
}, Reducers);

const sagaMiddleware = createSagaMiddleware();

const listOfMiddleware = [
    ...Middleware,
    sagaMiddleware
];

const Store = createStore(
    persistedReducer,
    applyMiddleware(...listOfMiddleware)
);

const Persistor = persistStore(Store);

sagaMiddleware.run(Sagas);

export {
    Persistor,
    Store
};