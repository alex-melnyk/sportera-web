import React, {Component} from 'react';
import {connect, Provider} from "react-redux";

import i18n from '../i18n';
import {Store} from "../store";
import * as AppActions from "../store/actions";

import './App.scss';

import {Button} from './common';
import {Header} from './common';


class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <div className="App">
                    <Header />
                    <Button
                        text={i18n.t('click_me')}
                        onClick={() => this.props.showAlert('Gotcha!')}
                    />
                </div>
            </Provider>
        );
    }
}

const AppContainer = connect(() => ({}), {
    showAlert: AppActions.showAlert
})(App);

export {AppContainer as App};
