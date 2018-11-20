import React from 'react';
import PropTypes from 'prop-types';

import './InputText.scss';

const InputText = () => (
  <input className="form-control" placeholder="Введите название команды" />
);

InputText.propTypes = {
};

export {InputText};