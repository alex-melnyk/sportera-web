import React from 'react';
import {connect} from "react-redux";
import {Redirect, Route, withRouter} from "react-router-dom";

import * as AuthActions from "../store/actions/authActions";

import {Routes} from "../navigation";

import './App.scss';

const SecurityInterlayer = ({component: Component, authorized, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                authorized ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: Routes.LOGIN,
                            state: {from: props.location}
                        }}
                    />
                )
            )}
        />
    );
};

const SecurityInterlayerContainer = withRouter(connect((state) => ({
    authorized: !!state.auth.accessToken
}), {
    signIn: AuthActions.signInWithEmailAndPassword
})(SecurityInterlayer));

export {SecurityInterlayerContainer as SecurityInterlayer};
