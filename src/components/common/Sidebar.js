import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
import 'simplebar';

import 'simplebar/dist/simplebar.css';
import './Sidebar.scss';

const Sidebar = ({routes}) => (
    <aside className="left-nav">
        <ul className="page-main-nav" data-simplebar>
            {
                routes.map(({path, label, icon}, index) => (
                    <li key={`sidebar_item_${index}`}>
                        <NavLink
                            className="nav-item"
                            activeClassName="active"
                            to={path}
                            aria-current="page"
                        >
                            <span className="nav-item-icon">
                                <i className={`ft-${icon}`}/>
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

Sidebar.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.required,
        label: PropTypes.string.required,
        icon: PropTypes.string.required,
    }))
};

Sidebar.defaultProps = {
    routes: []
};

export {Sidebar};