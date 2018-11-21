import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Button, PageToolbar, TeamCard} from "../../common";
import {CreateTeamModal} from "../../modals";

import axios from 'axios';
import i18n from '../../../i18n';
import * as actions from '../../../store/actions/index';

import TeamPhoto from '../../../assets/img/team/1.jpg';

const LOOK = {
    CARD: 'CARD',
    LIST: 'LIST'
};

class TeamsScreen extends Component {
    state = {
        look: LOOK.CARD,
        modalVisible: false,
    };

    componentDidMount() {
        this.props.onInitTeams();
    }

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

        // get teams data
        const teamsData = []; 
        this.props.teams.map(element => {

            // get data for coaches
            const coachData = [];
            element.employee_programs.map(el =>{
                const firstName = el.employee_position.employee.first_name;
                const lastName = el.employee_position.employee.last_name;
                const fullName = firstName + " " + lastName;
                return coachData.push({
                    id: el.id,
                    fullName
                });
            });

            // get data for working time
            const workingData = [];
            element.working_times.map(el => {
                const weekday = i18n.t('week_day', { returnObjects: true });
                return workingData.push({
                    id: el.id,
                    day: weekday[el.day],
                    from: el.from,
                    to: el.to
                });
            });

            teamsData.push({
                id: element.id,
                name: element.name,
                coachData,
                workingData
            });
        });

        switch (look) {
            case LOOK.CARD:
                return (
                    <div className="team-card-wrap grid-view">
                        {
                            teamsData.map((el) => (
                                <TeamCard
                                    key={el.id}
                                    photo={TeamPhoto}
                                    name={el.name}
                                    size={22}
                                    trainers={el.coachData}
                                    schedule={el.workingData}
                                />
                            ))
                        }
                    </div>
                );
            case LOOK.LIST:
                return (
                    <div className="team-card-wrap list-view">
                        {
                            teamsData.map((el) => (
                                <TeamCard
                                    key={el.id}
                                    photo={TeamPhoto}
                                    name={el.name}
                                    size={22}
                                    trainers={el.coachData}
                                    schedule={el.workingData}
                                />
                            ))
                        }
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
};

const mapStateToProps = state => {
    return {
        teams: state.app.teams
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitTeams: () => dispatch(actions.retrieveTeamsList())
    }
};

const ConnectTeam = connect(mapStateToProps, mapDispatchToProps)(TeamsScreen);

export {ConnectTeam as TeamsScreen};