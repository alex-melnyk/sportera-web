import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({icon, text, onClick}) => (
    <span
        className="btn btn-success"
        onClick={() => onClick && onClick()}
    >
            {
                icon && (
                    <i className={`ft-${icon}`}/>
                )
            }
        <span>{text}</span>
    </span>
);

Button.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export {Button};