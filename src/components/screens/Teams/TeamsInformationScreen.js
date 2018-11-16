import React, {Component} from 'react';
import {Link} from "react-router-dom";

class TeamsInformationScreen extends Component {
    render() {
        return (
            <div>
                TEAMS INFORMATION SCREEN

                <Link to="/teams">
                    TO TEAMS
                </Link>
            </div>
        );
    }
}

export {TeamsInformationScreen};