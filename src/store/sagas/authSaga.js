import {call, fork, put, takeLatest, select} from 'redux-saga/effects';
import {REHYDRATE} from 'redux-persist';
import { push } from 'connected-react-router';

import {applyAccessToken, authService} from "../../domain";
import * as Types from "../types";
import * as AuthActions from "../actions/authActions";

function* restoreState({payload}) {
    try {
        const {
            auth: {
                accessToken
            }
        } = payload;

        console.log(!!accessToken, accessToken)

        if (accessToken) {
            yield setAccessToken({accessToken});

            yield put(push('/'));
        }
    } catch (e) {
        console.warn(e);
    }
}

function* setAccessToken({accessToken}) {
    yield call(() => applyAccessToken(accessToken));
}

function* signInWithEmailAndPassword({email, password}) {
    try {
        const data = yield call(() => authService.signIn({email, password}));

        yield put(AuthActions.applyAccessToken({accessToken: data.token}));

        yield put(AuthActions.signInWithEmailAndPasswordSuccess({data}));
    } catch (error) {
        yield put(AuthActions.signInWithEmailAndPasswordFailure({error}));
    }
}

function* authListener() {
    yield takeLatest(Types.AUTH_SIGN_IN_REQUEST, signInWithEmailAndPassword);
    yield takeLatest(Types.AUTH_APPLY_ACCESS_TOKEN, setAccessToken);

    yield takeLatest(REHYDRATE, restoreState);
}

export default function* authSaga() {
    yield fork(authListener);
}