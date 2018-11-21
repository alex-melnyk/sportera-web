import * as Types from "../types";

export const retrieveTeamsList = () => ({type: Types.TEAMS_GET_LIST_REQUEST});
export const retrieveTeamsListSuccess = ({data}) => ({type: Types.TEAMS_GET_LIST_SUCCESS, data});
export const retrieveTeamsListFailure = ({error}) => ({type: Types.TEAMS_GET_LIST_FAILURE, error});

export const createNewTeam = ( name, image, sex, age, coach, schedule ) => ({ type: Types.TEAMS_ADD_NEW_REQUEST, name, image, sex, age, coach, schedule });
export const createNewTeamSuccess = ({ data }) => ({ type: Types.TEAMS_ADD_NEW_SUCCESS, data });
export const createNewTeamFailure = ({ error }) => ({ type: Types.TEAMS_ADD_NEW_FAILURE, error });