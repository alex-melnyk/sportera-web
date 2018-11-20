import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const ButtonType = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
};

const Button = ({text, icon, type, onClick}) => (
    <span
        className={`btn btn-${type}`}
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
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    type: PropTypes.oneOf(Object.values(ButtonType)),
    onClick: PropTypes.func
};

Button.defaultProps = {
    type: ButtonType.PRIMARY
};

Button.ButtonType = ButtonType;

export {Button, ButtonType};