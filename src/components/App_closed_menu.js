import React, {Component} from 'react';
import {connect} from "react-redux";

import i18n from '../i18n';
import {Header} from './common';
import {Left_nav} from './common';
import {Icons} from './common';


import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="Page-content small-menu"> 
                    <Left_nav />
                    <main className="main">
                        <Icons />
                    </main>
                </div>

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
