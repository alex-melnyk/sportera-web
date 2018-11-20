import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";

import {NavigationRoutes, Routes, SideBarRoutes} from '../navigation';
import {Header, Sidebar} from './common';

import './App.scss';

class App extends Component {
    state = {
        sidebarCollapsed: false
    };

    toggleMenuPressed = () => {
        this.setState(({sidebarCollapsed}) => ({
            sidebarCollapsed: !sidebarCollapsed
        }));
    };

    render() {
        const {
            sidebarCollapsed
        } = this.state;

        return (
            <div className="App">
                <Header onMenuToggle={this.toggleMenuPressed}/>
                <div className={`Page-content ${sidebarCollapsed ? 'small-menu' : ''}`}>
                    <Sidebar routes={SideBarRoutes}/>
                    <main className="main">
                        <Switch location={this.props.location}>
                            <Route
                                path="/"
                                exact={true}
                                render={() => (
                                    <Redirect to={Routes.DASHBOARD}/>
                                )}
                            />
                            {
                                NavigationRoutes.map((route, index) => (
                                    <Route
                                        key={`route_${index}`}
                                        {...route}
                                        component={route.component ? route.component : () => (
                                            <div><h3>{route.path}</h3></div>
                                        )}
                                    />
                                ))
                            }
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
