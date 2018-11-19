import React, {Component} from 'react';
import {connect} from "react-redux";
import {Route, Switch, withRouter} from "react-router-dom";

import {NavigationRoutes} from '../navigation';
import {Header, Sidebar} from './common';

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
                <Header onMenuToggle={this.toggleMenuPressed}/>
                <div className={`Page-content ${menuCollapsed && 'small-menu'}`}>
                    <Sidebar collapsed={menuCollapsed}/>
                    <main className="main">
                        <Switch location={this.props.location}>
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
