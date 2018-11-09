import React, {Component} from 'react';

import {Button} from './common';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Button
                    text="Click ME!"
                    onClick={() => alert('Gotcha!')}
                />
            </div>
        );
    }
}

export default App;
