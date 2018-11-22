import React, { Component } from 'react';
import axios from 'axios';

// import {connect} from 'react-redux';

import {PageToolbar, Table} from "../../common";

import i18n from '../../../i18n';
// import * as actions from '../../../store/actions';

class PlayersScreen extends Component {

    componentDidMount() {
        axios.get('https://private-anon-3b6d57b71e-sporteratest.apiary-mock.com/api/players?program_id=&status=&name=')
        .then(res => {
            console.log(res.data)
        })
        .catch(error=> console.log(error))
    }

    renderPlayers = () => {

        // get players data
        const playersDataTable = []; 

        return (
            <div>
                {
                    playersDataTable.map((el) => (
                        <Table
                            key={el.id}
                            column={el.column}
                            rows={el.rows}
                        />
                    ))
                }
            </div>
        );
    };

    render() {
        return (
            <div>
                <PageToolbar
                    actions={[
                        this.renderLookToggle(),
                        (
                            <div className="settings-item">
                                <Button
                                    icon="plus"
                                    text={i18n.t('teams__list_create_team_cta')}
                                    onClick={this.actionButtonPressed}
                                />
                            </div>
                        )
                    ]}
                />

                {this.renderPlayers()}

            </div>

        );
    }
};

export {PlayersScreen};