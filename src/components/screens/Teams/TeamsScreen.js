import React, {Component} from 'react';
import {Button, Modal, PageToolbar, TeamCard, TeamCardSimple} from "../../common";

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
                                onClick={this.actionButtonPressed}
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