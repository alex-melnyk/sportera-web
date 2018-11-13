import React, {Component} from 'react';
import {connect, Provider} from "react-redux";

import i18n from '../i18n';
import {Store} from "../store";

import './App.scss';

import {Button} from './common';
import * as AuthActions from "../store/actions/authActions";

class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <div className="App">
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
            </Provider>
        );
    }
}

const AppContainer = connect((state) => ({}), {
    signIn: AuthActions.signInWithEmailAndPassword
})(App);

export {AppContainer as App};
