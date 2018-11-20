import React from 'react';
import PropTypes from 'prop-types';

import './AddPhoto.scss';

const AddPhoto = () => (
    <input type="file" className="add-photo" />
);

AddPhoto.propTypes = {
};

export {AddPhoto};