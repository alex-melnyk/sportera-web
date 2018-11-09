import {fork, takeLatest} from 'redux-saga/effects';
import * as Types from "../types";

function* clickHandler({message}) {
    alert(message);
}

function* appListener() {
    // Prepare sagas functions
    yield takeLatest(Types.ACTION_SHOW_ALERT, clickHandler);
}

export default function* appSaga() {
    yield fork(appListener);
};
