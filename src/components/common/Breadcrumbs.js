import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";

import {NavigationRoutes} from "../../navigation";

const Breadcrumbs = ({location}) => {
    const route = NavigationRoutes.find((route) => route.path === location.pathname);

    return (
        <ul className="breadcrumbs">
            <li className="bredcrumb-item">
                {route.path}
            </li>
        </ul>
    );
};

Breadcrumbs.propTypes = {
    paths: PropTypes.array
};

Breadcrumbs.defaultProps = {
    paths: []
};

const BreadcrumbsWithRouter = withRouter(Breadcrumbs);

export {BreadcrumbsWithRouter as Breadcrumbs};