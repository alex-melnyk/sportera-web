import React, {Component} from 'react';

import i18n from '../../../i18n';
import {PageToolbar, TeamCard, TeamCardSimple, Button, Modal} from "../../common";

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

    render() {
        const {
            look
        } = this.state;

        return (
            <div>
                <PageToolbar
                    actions={[
                        this.renderLookToggle(),
                        (
                            <Button
                                icon="plus"
                                text="Создать Команду"
                                onClick={() => this.setState({modalVisible: true})}
                            />
                        )
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
                    )
                }
                <Modal visible={this.state.modalVisible}>
                    <div>
                        hgfiughsidf
                    </div>
                </Modal>
            </div>

        );
    }
}

export {TeamsScreen};