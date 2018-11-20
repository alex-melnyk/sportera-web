import React from 'react';

import {Button} from "./Button";

import './Modal.scss';

const Modal = ({children, visible, title, actions, onClose}) => {
    if (!visible) {
        return null;
    }

    return (
        <div className="modal-wrap">
            <div className="modal-dialog">
                <div className="modal-content modal-wide">
                    <div className="modal-header">
                        <div className="modal-title">
                            <h4 className="fw400">
                                {title}
                            </h4>
                        </div>
                        <div className="modal-close close">
                            <i
                                className="ft-close"
                                onClick={() => onClose && onClose()}
                            />
                        </div>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        {actions}
                    </div>
                </div>
            </div>
        </div>
    );

};

Modal.propTypes = {};

export {Modal};