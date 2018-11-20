import React, {Component} from 'react';
import {
    AddPhoto,
    Button,
    DropdownSelect,
    InputRadio,
    InputText,
    Label,
    Modal,
    PageToolbar,
    TeamCard,
    TeamCardSimple
} from "../../common";

import i18n from '../../../i18n';

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
                <Modal
                    visible={this.state.modalVisible}
                    title={i18n.t('teams__list__modal_title')}
                    onClose={() => this.setState({
                        modalVisible: false
                    })}
                >
                    <div className="bordered-box">
                        <div className="row">
                            <div className="col-md-6">
                                <AddPhoto/>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb20">
                                    <div className="d-block">
                                        <Label/>
                                    </div>
                                    <div className="d-block">
                                        <InputText/>
                                    </div>
                                </div>
                                <div className="form-group mb15">
                                    <div className="d-block">
                                        <label className="">
                                            Пол игроков
                                        </label>
                                    </div>
                                    <div className="d-block">
                                        <InputRadio/>
                                    </div>
                                </div>
                                <div className="form-group mb20">
                                    <div className="d-block">
                                        <label className="">
                                            Возраст игроков:
                                        </label>
                                    </div>
                                    <div className="d-block">
                                        <DropdownSelect/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>

        );
    }
}

export {TeamsScreen};