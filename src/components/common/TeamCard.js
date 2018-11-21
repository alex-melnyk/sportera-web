import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import './TeamCard.scss';

class TeamCard extends Component {
    state = {
        trainersShow: false,
        scheduleShow: false,
    };

    render() {
        const {
            trainersShow,
            scheduleShow
        } = this.state;

        const {
            name,
            size,
            photo,
            trainers,
            schedule
        } = this.props;

        return (
            <div className="team-card">
                <Link to="/teams/information">
                    <div className="card-logo">
                        <img
                            src={photo}
                            alt=""
                            title=""
                        />
                        <div className="main-info">
                            <h4>{name}</h4>
                            <div className="players">
                                <i className="ft-command"/>
                                <span>{size}</span>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="card-data-wtap">
                    <div className="card-data">
                        <ul className="team-card-list">
                            <li className={`card-list-dropdown ${trainersShow ? 'open' : ''}`}>
                                <div className="team-card-item">
                                    <div className="flex-column">
                                        <span>Тренерa:</span>
                                    </div>
                                    <div className="flex-column">
                                        {
                                            trainers.map((trainer) => (
                                                <p key={trainer.id}>{trainer.fullName}</p>
                                            ))
                                        }
                                    </div>
                                    <div
                                        className="flex-column arrow-column"
                                        onClick={() => this.setState(({trainersShow}) => ({trainersShow: !trainersShow}))}
                                    >
                                        <i className="ft-arrow-down-filled"/>
                                    </div>
                                </div>
                            </li>
                            <li className={`card-list-dropdown ${scheduleShow ? 'open' : ''}`}>
                                <div className="team-card-item">
                                    <div className="flex-column">
                                        <span>Расписание тренировок</span>
                                        <div className="schedule">
                                            {
                                                schedule.map((app) => (
                                                    <div className="schedule-row" key={app.id}>
                                                        <span>{app.day}</span>
                                                        <p>{app.from} - {app.to}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div
                                        className="flex-column arrow-column"
                                        onClick={() => this.setState(({scheduleShow}) => ({scheduleShow: !scheduleShow}))}
                                    >
                                        <i className="ft-arrow-down-filled"/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

TeamCard.propTypes = {
    name: PropTypes.string,
    size: PropTypes.number,
    photo: PropTypes.string,
    trainers: PropTypes.arrayOf(PropTypes.shape({
        fullName: PropTypes.string
    })),
    schedule: PropTypes.arrayOf(PropTypes.shape({
        day: PropTypes.string,
        from: PropTypes.string,
        to: PropTypes.string,
    })),

};

TeamCard.defaultProps = {
    trainers: [],
    schedule: []
};

export {TeamCard};