import {all} from 'redux-saga/effects';

import appSaga from './appSaga';
import authSaga from "./authSaga";
import teamsSaga from "./teamsSaga";

export default function* root() {
    yield all([
        appSaga(),
        authSaga(),
        teamsSaga()
    ]);
};
