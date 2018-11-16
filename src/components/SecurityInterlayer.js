import React from 'react';
import {connect} from "react-redux";
import {Route, withRouter} from "react-router-dom";

import * as AuthActions from "../store/actions/authActions";

import './App.scss';

const SecurityInterlayer = ({component: Component, authorized, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                <Component
                    {...props}
                />
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
