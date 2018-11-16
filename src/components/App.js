import React, {Component} from 'react';
import {connect} from "react-redux";

import i18n from '../i18n';
import {Header, Sidebar, Icons, PageToolbar, CommandCard} from './common';

import './App.scss';

class App extends Component {
    state = {
        menuCollapsed: false
    };

    toggleMenuPressed = () => {
        this.setState(({menuCollapsed}) => ({
            menuCollapsed: !menuCollapsed
        }));
    };

    render() {
        const {
            menuCollapsed
        } = this.state;

        return (
            <div className="App">
                <Header onMenuToggle={this.toggleMenuPressed} />
                <div className={`Page-content ${menuCollapsed && 'small-menu'}`}>
                    <Sidebar collapsed={menuCollapsed} />
                    <main className="main">
                        <PageToolbar />
                        <CommandCard />
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
