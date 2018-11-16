import React, {Component} from 'react';

import i18n from '../../../i18n';
import {PageToolbar, TeamCard, TeamCardSimple} from "../../common";

const LOOK = {
    CARD: 'CARD',
    LIST: 'LIST'
};

class TeamsScreen extends Component {
    state = {
        look: LOOK.CARD
    };

    setLAFPressed = (look) => {
        this.setState({look});
    };

    actionButtonPressed = () => {
        alert(i18n.t('not_implemented'))
    };

    renderLookToggle = () => (
        <div className="settings-item success-group-sm">
            <a
                href="#"
                className="btn-sm btn-success active"
                onClick={() => this.setLAFPressed(LOOK.CARD)}
            >
                <i className="ft-block"></i>
            </a>
            <a
                href="#"
                className="btn-sm btn-success"
                onClick={() => this.setLAFPressed(LOOK.LIST)}
            >
                <i className="ft-list-view"></i>
            </a>
        </div>
    );

    renderActionButton = () => (
        <div className="settings-item">
            <a
                href="#"
                className="btn btn-success"
                onClick={this.actionButtonPressed}
            >
                <i className="ft-plus"></i>
                <span>Создать команду</span>
            </a>
        </div>
    );

    render() {
        const {
            look
        } = this.state;

        return (
            <div>
                <PageToolbar
                    actions={[
                        this.renderLookToggle(),
                        this.renderActionButton()
                    ]}
                />
                {
                    look === LOOK.CARD ? (
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
                    ) : (
                        <div>
                            LIST
                        </div>
                    )
                }

            </div>

        );
    }
}

export {TeamsScreen};