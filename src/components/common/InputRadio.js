import React from 'react';
import PropTypes from 'prop-types';

import './InputRadio.scss';

const InputRadio = () => (
	<div>
    <span>
			<input type="radio" name="gender" id="female" checked/>
			<label for="female">Девочки </label>
		</span>
    <span>
			<input type="radio" name="gender" id="male"/>
			<label for="male">Мальчики </label>
		</span>
	</div>
);

InputRadio.propTypes = {
};

export {InputRadio};