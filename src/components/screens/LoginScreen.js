import React, {Component} from 'react';
import {connect} from "react-redux";

import i18n from '../../i18n';

import * as AuthActions from "../../store/actions/authActions";

import {Button} from "../common";

class LoginScreen extends Component {
    render() {
        return (
            <div>
                <Button
                    text={i18n.t('click_me')}
                    onClick={() => {
                        this.props.signIn({
                            email: 'giologi@gmail.com',
                            password: '1234567890'
                        });
                    }}
                />
            </div>
        );
    }
}

const LoginContainer = connect((state) => ({}), {
    signIn: AuthActions.signInWithEmailAndPassword
})(LoginScreen);

export {LoginContainer as LoginScreen};