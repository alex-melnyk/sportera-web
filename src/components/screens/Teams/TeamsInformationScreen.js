import React, {Component} from 'react';
import {Link} from "react-router-dom";

import {PageToolbar} from "../../common";

class TeamsInformationScreen extends Component {
    render() {
        return (
            <div>
                <PageToolbar/>

                <Link to="/teams">
                    TO TEAMS
                </Link>
            </div>
        );
    }
}

export {TeamsInformationScreen};