import React, {Component} from 'react';
import {Link} from "react-router-dom";

import {CommandCard, PageToolbar} from "../../common";

class TeamsScreen extends Component {
    render() {
        return (
            <div>
                <PageToolbar/>

                TEAMS SCREEN

                <Link to="/teams/information">
                    TO INFO
                </Link>

                <CommandCard />
            </div>
        );
    }
}

export {TeamsScreen};