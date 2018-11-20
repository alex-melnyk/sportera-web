import React from 'react';
import PropTypes from 'prop-types';

import './TimeSchedule.scss';

const TimeSchedule = () => (
  <div class="time-schedule">
    <div className="row">
      <div className="col">
        <div className="dropdown-select">
          <span className="dropdown-toggle">00:00</span>
          <div className="dropdown-menu d-none">
            <span className="dropdown-item">Select option1</span>
            <span className="dropdown-item">Select option2</span>
            <span className="dropdown-item">Select option3</span>
            <span className="dropdown-item">Select option4</span>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="dropdown-select">
          <span className="dropdown-toggle">00:00</span>
          <div className="dropdown-menu d-none">
            <span className="dropdown-item">Select option1</span>
            <span className="dropdown-item">Select option2</span>
            <span className="dropdown-item">Select option3</span>
            <span className="dropdown-item">Select option4</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

TimeSchedule.propTypes = {
};

export {TimeSchedule};