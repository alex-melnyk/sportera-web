import React, {Component} from 'react';
import {connect} from "react-redux";

import i18n from '../i18n';
import {Button} from './common';

import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Button
                    text={i18n.t('click_me')}
                    onClick={() => {

                    }}
                />
            </div>
        );
    }
}

const AppContainer = connect((state) => ({
    // State
}), {
    // Actions
})(App);

export {AppContainer as App};
