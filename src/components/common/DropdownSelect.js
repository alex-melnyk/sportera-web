import React from 'react';
import PropTypes from 'prop-types';

import './DropdownSelect.scss';

const DropdownSelect = () => (
  <div class="dropdown-select">
    <span class="dropdown-toggle">Возраст от</span>
    <div class="dropdown-menu">
      <span class="dropdown-item">Select option1</span>
      <span class="dropdown-item">Select option2</span>
      <span class="dropdown-item">Select option3</span>
      <span class="dropdown-item">Select option4</span>
    </div>
  </div>
);

DropdownSelect.propTypes = {
};

export {DropdownSelect};