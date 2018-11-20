import React from 'react';
import PropTypes from 'prop-types';

import {Breadcrumbs} from "./Breadcrumbs";

import './PageToolbar.scss';
import './Btns.scss';

const PageToolbar = ({actions}) => (
    <div className="settings-row">
        <Breadcrumbs/>

        <div className="right-settings">
            {
                actions.map((action, index) => (
                    <div
                        key={`page_toolbar_action_${index}`}
                        className="settings-item"
                    >
                        {action}
                    </div>
                ))
            }
        </div>

    </div>
);

PageToolbar.propTypes = {
    actions: PropTypes.array
};

PageToolbar.defaultProps = {
    actions: []
};

export {PageToolbar};