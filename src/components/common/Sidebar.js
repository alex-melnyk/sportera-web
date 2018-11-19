import React, {Component} from 'react';

import 'simplebar';
import 'simplebar/dist/simplebar.css';

import './Sidebar.scss';
import {NavLink} from "react-router-dom";

const Sidebar = () => (
    <aside className="left-nav">
        <ul className="page-main-nav" data-simplebar>
            <li>
                <NavLink activeClassName="active" className="nav-item" to="/" exact={true}>
    				<span className="nav-item-icon">
    					<i className="ft-dashboard" />
    				</span>
                    <span className="nav-item-title">Дэшборд</span>
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" className="nav-item" to="/teams">
                    <span className="nav-item-icon small-icon">
                        <i className="ft-command" />
                    </span>
                    <span className="nav-item-title">Команды</span>
                </NavLink>
            </li>
            <li>
                <a href="#" className="nav-item">
    				<span className="nav-item-icon">
    					<i className="ft-user" />
    				</span>
                    <span className="nav-item-title">Игроки</span>
                </a>
            </li>
            <li>
                <a href="#" className="nav-item">
    				<span className="nav-item-icon">
    					<i className="ft-docs" />
    				</span>
                    <span className="nav-item-title">Документы</span>
                </a>
            </li>
            <li>
                <a href="#" className="nav-item">
    				<span className="nav-item-icon">
    					<i className="ft-calendar" />
    				</span>
                    <span className="nav-item-title">Календарь</span>
                </a>
            </li>
            <li>
                <a href="#" className="nav-item">
    				<span className="nav-item-icon">
    					<i className="ft-club" />
    				</span>
                    <span className="nav-item-title">Клуб</span>
                </a>
            </li>
            <li>
                <a href="#" className="nav-item">
    				<span className="nav-item-icon">
    					<i className="ft-payment" />
    				</span>
                    <span className="nav-item-title">Платежи</span>
                </a>
            </li>
            <li>
                <a href="#" className="nav-item">
    				<span className="nav-item-icon">
    					<i className="ft-tourney" />
    				</span>
                    <span className="nav-item-title">Турниры</span>
                </a>
            </li>
            <li>
                <a href="#" className="nav-item">
    				<span className="nav-item-icon">
    					<i className="ft-chat" />
    				</span>
                    <span className="nav-item-title">Чат</span>
                </a>
            </li>
            <li>
                <a href="#" className="nav-item">
    				<span className="nav-item-icon">
    					<i className="ft-crm" />
    				</span>
                    <span className="nav-item-title">CRM</span>
                </a>
            </li>
            <li>
                <a href="#" className="nav-item">
    				<span className="nav-item-icon">
    					<i className="ft-settings" />
    				</span>
                    <span className="nav-item-title">Настройки</span>
                </a>
            </li>
        </ul>
    </aside>
);

Sidebar.propTypes = {};

export {Sidebar};