import React, {Component} from 'react';
import {Link} from "react-router-dom";

class TeamsScreen extends Component {
    render() {
        return (
            <div>
                TEAMS SCREEN

                <Link to="/teams/information">
                    TO INFO
                </Link>
            </div>
        );
    }
}

export {TeamsScreen};