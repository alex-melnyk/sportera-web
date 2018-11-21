import {call, fork, put, takeLatest} from 'redux-saga/effects';

import {teamsService} from "../../domain";
import * as Types from "../types";
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

/**
 *
 * @param photo
 * @param name
 * @param genders
 * @param age
 * @param employees
 * @param season
 * @param workingTimes
 * @returns {IterableIterator<*>}
 */
function* saga_addNewTeam({
                              photo, name, genders,
                              age, employees, season,
                              workingTimes,
                          }) {


    try {
        const data = yield call(() => teamsService.addNewTeam({
            photo, name, genders,
            age, employees, season,
            workingTimes,
        }));
        console.log("DATA:", data);
        yield put(TeamsActions.createNewTeamSuccess({data}));
    } catch (error) {
        console.log("Error:", error.message);
        yield put(TeamsActions.createNewTeamFailure({error}));
    }
}


function* teamsListener() {
    yield takeLatest(Types.TEAMS_GET_LIST_REQUEST, retrieveTeamsList);
    yield takeLatest(Types.TEAMS_ADD_NEW_REQUEST, saga_addNewTeam);


    yield takeLatest(Types.AUTH_SIGN_IN_SUCCESS, retrieveTeamsList);
}

export default function* teamsSaga() {
    yield fork(teamsListener);
}