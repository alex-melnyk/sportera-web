import React, { Component } from 'react';
import axios from 'axios';

// import {connect} from 'react-redux';

import {Button, PageToolbar, Table} from "../../common";

import i18n from '../../../i18n';
// import * as actions from '../../../store/actions';

class PlayersScreen extends Component {
    state = {
        playersData: []
    }

    componentDidMount() {
        axios.get('https://private-anon-3b6d57b71e-sporteratest.apiary-mock.com/api/players?program_id=&status=&name=')
        .then(res => {
            console.log('player', res.data.players.map(el => el.birth_date));
            this.setState({
                playersData: res.data.players
            })
        })
        .catch(error=> console.log(error))
    }

    renderPlayers = () => {

        // get players data
        const column = i18n.t('players_table', { returnObjects: true });
        const playerData =[];
        this.state.playersData.map(player => {
            const fullName = `${player.first_name} ${player.last_name}`;
            playerData.push({
                fullName,
                birth_date: player.birth_date
            })
        } );

        console.log('playerData', playerData);

        return (
            <div>
                <Table
                    columns={column}
                    rows={playerData}
                />
            </div>
        );
    };

    render() {
        return (
            <div>
                <PageToolbar
                    actions={[
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