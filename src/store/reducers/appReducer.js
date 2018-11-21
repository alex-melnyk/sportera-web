import * as Type from "../types/index";

const initialState = {
    teams: [],
    error: false
};


export default (state = initialState, action) => {
    switch (action.type) {
        case(Type.TEAMS_GET_LIST_SUCCESS): 
            return {
                ...state,
                teams: action.data,
                error: false
            }
        case(Type.TEAMS_GET_LIST_FAILURE): 
            return {
                ...state,
                error: true
            }
        default: 
            return state;
    }
};