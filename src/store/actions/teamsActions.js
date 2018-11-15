import * as Types from "../types";

export const retrieveTeamsList = () => ({type: Types.TEAMS_GET_LIST_REQUEST});
export const retrieveTeamsListSuccess = ({data}) => ({type: Types.TEAMS_GET_LIST_SUCCESS, data});
export const retrieveTeamsListFailure = ({error}) => ({type: Types.TEAMS_GET_LIST_FAILURE, error});