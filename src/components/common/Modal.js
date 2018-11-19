import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({children, visible}) => {
    if (!visible) {
        return null;
    }

    return (
        <div>
            {children}
        </div>
    );
};

Modal.propTypes = {
};

export {Modal};