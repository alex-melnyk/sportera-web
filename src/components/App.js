import React, {Component} from 'react';
import {connect} from "react-redux";
import {Route, Switch, withRouter} from "react-router-dom";

import {Header, PageToolbar, Sidebar} from './common';
import {DashboardScreen, TeamsInformationScreen} from "./screens";

import './App.scss';
import {TeamsScreen} from "./screens/Teams/TeamsScreen";

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
                <Header onMenuToggle={this.toggleMenuPressed}/>
                <div className={`Page-content ${menuCollapsed && 'small-menu'}`}>
                    <Sidebar collapsed={menuCollapsed}/>
                    <main className="main">
                        <PageToolbar/>
                        <Switch location={this.props.location}>
                            <Route
                                exact={true}
                                path="/"
                                component={DashboardScreen}
                            />
                            <Route
                                exact={true}
                                path="/teams"
                                component={TeamsScreen}
                            />
                            <Route
                                exact={true}
                                path="/teams/information"
                                component={TeamsInformationScreen}
                            />
                        </Switch>
                    </main>
                </div>

            </div>
        );
    }
}

const AppContainer = withRouter(connect((state) => ({
    // State
}), {
    // Actions
})(App));

export {AppContainer as App};
