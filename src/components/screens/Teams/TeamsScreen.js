import React, {Component} from 'react';

import {Button, PageToolbar, TeamCard, TeamCardSimple} from "../../common";

import i18n from '../../../i18n';
import {CreateTeamModal} from "../../modals";

const LOOK = {
    CARD: 'CARD',
    LIST: 'LIST'
};

class TeamsScreen extends Component {
    state = {
        look: LOOK.CARD,
        modalVisible: false
    };

    setLAFPressed = (look) => {
        this.setState({look});
    };

    actionButtonPressed = () => {
        this.setState({modalVisible: true});
    };

    renderLookToggle = () => (
        <div className="settings-item success-group-sm">
            <span
                className={`btn-sm btn-success ${this.state.look === LOOK.CARD && 'active'}`}
                onClick={() => this.setLAFPressed(LOOK.CARD)}
            >
                <i className="ft-block"/>
            </span>
            <span
                className={`btn-sm btn-success ${this.state.look === LOOK.LIST && 'active'}`}
                onClick={() => this.setLAFPressed(LOOK.LIST)}
            >
                <i className="ft-list-view"/>
            </span>
        </div>
    );

    renderTeams = () => {
        const {
            look
        } = this.state;

        switch (look) {
            case LOOK.CARD:
                return (
                    <div className="team-card-wrap grid-view">
                        <TeamCard/>
                        {
                            Object.keys([...new Array(8)]).map((key) => (
                                <TeamCardSimple
                                    key={key}
                                />
                            ))
                        }
                        <TeamCard/>
                    </div>
                );
            case LOOK.LIST:
                return (
                    <div className="team-card-wrap list-view">
                        <TeamCard/>
                        {
                            Object.keys([...new Array(8)]).map((key) => (
                                <TeamCardSimple
                                    key={key}
                                />
                            ))
                        }
                        <TeamCard/>
                    </div>
                );
            default:
                return null;
        }
    };

    render() {
        const {
            modalVisible
        } = this.state;

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

                {this.renderTeams()}

                <CreateTeamModal
                    visible={modalVisible}
                    onClose={() => this.setState({modalVisible: false})}
                />
            </div>

        );
    }
}

export {TeamsScreen};