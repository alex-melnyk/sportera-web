import React from 'react';
import PropTypes from 'prop-types';

import './TextLink.scss';

const TextLink = () => (
  <div className="text-link">
    <i className="ft-plus-rounded"></i>
    <span>Добавить тренера</span>
  </div>
);

TextLink.propTypes = {
};

export {TextLink};