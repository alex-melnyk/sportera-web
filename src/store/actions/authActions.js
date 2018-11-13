import {AUTH_SIGN_IN_FAILURE, AUTH_SIGN_IN_REQUEST, AUTH_SIGN_IN_SUCCESS} from "../types/index";

export const signInWithEmailAndPassword = ({email, password}) => ({
    type: AUTH_SIGN_IN_REQUEST,
    email,
    password
});

export const signInWithEmailAndPasswordSuccess = ({data}) => ({type: AUTH_SIGN_IN_SUCCESS, data});
export const signInWithEmailAndPasswordFailure = ({error}) => ({type: AUTH_SIGN_IN_FAILURE, error});