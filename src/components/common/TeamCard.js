import React, {Component} from 'react';
import {Link} from "react-router-dom";

import command1 from '../../assets/img/team/1.jpg';

import './TeamCard.scss';

const TeamCard = () => (
    <div className="team-card">
        <Link to="/teams/information">
            <div className="card-logo">
                <img
                    src={command1}
                    alt=""
                    title=""
                />
                <div className="main-info">
                    <h4>Феникс 2008</h4>
                    <div className="players">
                        <i className="ft-command"/>
                        <span>22</span>
                    </div>
                </div>
            </div>
        </Link>
        <div className="card-data-wtap card-data-open">
            <div className="card-data">
                <ul className="team-card-list">
                    <li className="card-list-dropdown open">
                        <div className="team-card-item">
                            <div className="flex-column">
                                <span>Тренерa:</span>
                            </div>
                            <div className="flex-column">
                                <p>Игорь Смолецкий</p>
                                <p>Василий Марченко</p>
                            </div>
                            <div className="flex-column arrow-column">
                                <i className="ft-arrow-down-filled"/>
                            </div>
                        </div>
                    </li>
                    <li className="card-list-dropdown open">
                        <div className="team-card-item">
                            <div className="flex-column">
                                <span>Расписание тренировок</span>
                                <div className="schedule">
                                    <div className="schedule-row">
                                        <span>Понедельник</span>
                                        <p>13:00 - 16:00 </p>
                                    </div>
                                    <div className="schedule-row">
                                        <span>Вторник</span>
                                        <p>12:00 - 15:00 </p>
                                    </div>
                                    <div className="schedule-row">
                                        <span>Среда</span>
                                        <p>10:00 - 16:00 </p>
                                    </div>
                                    <div className="schedule-row">
                                        <span>Четверг</span>
                                        <p>13:00 - 16:00 </p>
                                    </div>
                                    <div className="schedule-row">
                                        <span>Пятница</span>
                                        <p>12:00 - 15:00 </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-column arrow-column">
                                <i className="ft-arrow-down-filled"/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>


);

export {TeamCard};