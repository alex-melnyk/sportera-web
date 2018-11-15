import * as Types from "../types/index";

export const signInWithEmailAndPassword = ({email, password}) => ({
    type: Types.AUTH_SIGN_IN_REQUEST,
    email,
    password
});

export const signInWithEmailAndPasswordSuccess = ({data}) => ({type: Types.AUTH_SIGN_IN_SUCCESS, data});
export const signInWithEmailAndPasswordFailure = ({error}) => ({type: Types.AUTH_SIGN_IN_FAILURE, error});

export const applyAccessToken = ({accessToken}) => ({type: Types.AUTH_APPLY_ACCESS_TOKEN, accessToken});