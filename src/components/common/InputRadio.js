import React from 'react';

import './InputRadio.scss';

const InputRadio = ({genderSelectedOption, genderOptionsHandler}) => (
    <div>
    <span>
			<input type="radio" name="gender" id="female"
				   value="female"
				   checked={genderSelectedOption === 'female'}
                   onChange={genderOptionsHandler}/>
			<label for="female">Девочки </label>
		</span>
        <span>
			<input type="radio" name="gender" id="male"
				   value="male"
				   checked={genderSelectedOption === 'male'}
                   onChange={genderOptionsHandler}
			/>
			<label for="male">Мальчики </label>
		</span>
    </div>
);

InputRadio.propTypes = {};

export {InputRadio};