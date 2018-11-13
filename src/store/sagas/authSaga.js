import {fork, takeLatest, call, put} from 'redux-saga/effects';

import * as Types from "../types";
import {applyAccessToken, authService} from "../../domain";
import * as AuthActions from "../actions/authActions";

function* signInWithEmailAndPassword({email, password}) {
    try {
        const data = yield call(() => authService.signIn({email, password}));

        yield call(() => applyAccessToken(data.token));

        yield put(AuthActions.signInWithEmailAndPasswordSuccess({data}));
    } catch (error) {
        yield put(AuthActions.signInWithEmailAndPasswordFailure({error}));
    }
}

function* authListener() {
    yield takeLatest(Types.AUTH_SIGN_IN_REQUEST, signInWithEmailAndPassword);
}

export default function* authSaga() {
    yield fork(authListener);
}