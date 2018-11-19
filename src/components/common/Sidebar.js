import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import 'simplebar';

import {SideBarRoutes} from "../../navigation";

import 'simplebar/dist/simplebar.css';
import './Sidebar.scss';

const Sidebar = () => (
    <aside className="left-nav">
        <ul className="page-main-nav" data-simplebar>
            {
                SideBarRoutes.map(({path, label, icon}, index) => (
                    <li key={`sidebar_item_${index}`}>
                        <NavLink
                            className="nav-item"
                            activeClassName="active"
                            to={path}
                            aria-current="page"
                        >
                            <span className="nav-item-icon">
                                <i className={`ft-${icon}`}></i>
                            </span>
                            <span className="nav-item-title">
                                {label}
                            </span>
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    </aside>
);

Sidebar.propTypes = {};

export {Sidebar};