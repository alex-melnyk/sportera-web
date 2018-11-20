import React from 'react';

import './DropdownSelect.scss';

const DropdownSelect = () => (
    <div className="dropdown-select">
        <span className="dropdown-toggle">Возраст от</span>
        <div className="dropdown-menu d-none">
            <span className="dropdown-item">Select option1</span>
            <span className="dropdown-item">Select option2</span>
            <span className="dropdown-item">Select option3</span>
            <span className="dropdown-item">Select option4</span>
        </div>
    </div>
);

DropdownSelect.propTypes = {};

export {DropdownSelect};