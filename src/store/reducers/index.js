import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';

import app from './appReducer';
import auth from './authReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    app,
    auth
});