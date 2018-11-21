import * as Types from "../types";

export const retrieveTeamsList = () => ({type: Types.TEAMS_GET_LIST_REQUEST});
export const retrieveTeamsListSuccess = ({data}) => ({type: Types.TEAMS_GET_LIST_SUCCESS, data});
export const retrieveTeamsListFailure = ({error}) => ({type: Types.TEAMS_GET_LIST_FAILURE, error});


/**
 * From API:
 * 'program[photo]'
 * 'program[name]'
 * 'program[field_name]'
 * 'program[field_id]'
 * 'program[genders][]'
 * 'program[age_from]'
 * 'program[age_to]'
 * 'program[employee_programs_attributes][][employees_position_id]'
 * 'program[season_start]'
 * 'program[season_end]'
 * 'program[working_times_attributes][][day]'
 * 'program[working_times_attributes][][from]'
 * 'program[working_times_attributes][][to]'
 * 'program[working_times_attributes][][day]'
 * 'program[working_times_attributes][][from]'
 * 'program[working_times_attributes][][to]'
 * * @param photo
 * @param name
 * @param genders
 * @param age
 * @param employee
 * @param season
 * @param workingTimes
 * @returns {{type: string, photo: *, name: *, genders: *, age: *, employee: *, season: *, workingTimes: *}}
 */
export const createNewTeam = ({
                                  photo,
                                  name,
                                  genders,
                                  age,
                                  employees, // []
                                  season, // start, end
                                  workingTimes //
                              }) => ({
    type: Types.TEAMS_ADD_NEW_REQUEST,
    photo,
    name,
    genders,
    age,
    employees,
    season,
    workingTimes,
});
export const createNewTeamSuccess = ({data}) => ({type: Types.TEAMS_ADD_NEW_SUCCESS, data});
export const createNewTeamFailure = ({error}) => ({type: Types.TEAMS_ADD_NEW_FAILURE, error});