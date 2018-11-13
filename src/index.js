import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {Route} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";

import {History, Store} from "./store";
import {unregister} from './serviceWorker';

import {Routes} from "./navigation";
import {App, LoginScreen, SecurityInterlayer} from "./components";

global.__DEV__ = process.env.NODE_ENV === 'development';

const Root = () => (
    <Provider store={Store}>
        <ConnectedRouter history={History}>
            <div className="App">
                <Route
                    path={Routes.LOGIN}
                    component={LoginScreen}
                />
                <SecurityInterlayer
                    exact
                    path="/"
                    component={App}
                />
            </div>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
unregister();
