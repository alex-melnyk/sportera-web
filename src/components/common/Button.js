import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({text, onClick}) => (
    <button
        className="button"
        onClick={() => onClick && onClick()}
    >
        <span className="text">
            {text}
        </span>
    </button>
);

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export {Button};