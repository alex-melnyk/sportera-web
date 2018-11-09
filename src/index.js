import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import {Store} from "./store";
import {App} from './components';
import * as serviceWorker from './serviceWorker';


const Root = () => (
    <Provider store={Store}>
        <App />
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
