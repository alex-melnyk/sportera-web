import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

import {NavigationRoutes} from "../../navigation";

import './Breadcrumbs.scss';

const Breadcrumbs = ({breadcrumbs}) => (
    <ul className="breadcrumbs">
        {
            breadcrumbs.filter((b, i) => i).map((breadcrumb, index) => (
                <NavLink
                    key={`breadcrumb_${index}`}
                    className={`breadcrumb-item`}
                    to={breadcrumb.props.match.url}
                    exact={true}
                >
                    {breadcrumb}
                </NavLink>
            ))
        }
    </ul>
);

Breadcrumbs.propTypes = {
    breadcrumbs: PropTypes.array
};

Breadcrumbs.defaultProps = {
    breadcrumbs: []
};

const BreadcrumbsWithRouter = withBreadcrumbs(NavigationRoutes)(Breadcrumbs);
export {BreadcrumbsWithRouter as Breadcrumbs};