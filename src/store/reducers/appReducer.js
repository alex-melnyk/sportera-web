import * as Type from "../types/index";

const initialState = {
    teams: [],
    error: false
};

const retrieveTeamsListSuccess = (state, action) => {
    return {
        ...state,
        teams: action.data,
        error: false
    }
};

const retrieveTeamsListFailure = (state, action) => {
    return {
        ...state,
        error: true
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case(Type.TEAMS_GET_LIST_SUCCESS): return retrieveTeamsListSuccess(state, action)
        case(Type.TEAMS_GET_LIST_FAILURE): return retrieveTeamsListFailure(state, action)
        default: return state;
    }
};