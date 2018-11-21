import React from 'react';

import './AddPhoto.scss';

const AddPhoto = ({onChange}) => (
    <input type="file" className="add-photo" onChange={onChange}/>
);

AddPhoto.propTypes = {};

export {AddPhoto};