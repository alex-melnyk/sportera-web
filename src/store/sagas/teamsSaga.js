import {fork, takeLatest, call, put} from 'redux-saga/effects';

import * as Types from "../types";
import {teamsService} from "../../domain";
import * as TeamsActions from "../actions/teamsActions";

function* retrieveTeamsList() {
    try {
        const data = yield call(() => teamsService.getTeamsList());

        console.log(data);
        yield put(TeamsActions.retrieveTeamsListSuccess({data}));
    } catch (error) {
        yield put(TeamsActions.retrieveTeamsListFailure({error}));
    }
}

function* teamsListener() {
    yield takeLatest(Types.TEAMS_GET_LIST_REQUEST, retrieveTeamsList);


    yield takeLatest(Types.AUTH_SIGN_IN_SUCCESS, retrieveTeamsList);
}

export default function* teamsSaga() {
    yield fork(teamsListener);
}