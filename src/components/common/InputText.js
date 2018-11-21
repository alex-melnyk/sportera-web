import React from 'react';

import './InputText.scss';

const InputText = (props) => (
    <input className="form-control" placeholder="Введите название команды" onChange={props.onChange}/>
);

InputText.propTypes = {};

export {InputText};