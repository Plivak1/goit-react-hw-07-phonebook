import React from 'react';
import { LabelFilter, InputFilter } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ changeInput }) => {
	// console.log(typeof changeInput);
	return (
		<LabelFilter>
			Find contacts by Name
			<InputFilter
				type="text"
				name="filter"
				onChange={changeInput}
			></InputFilter>
		</LabelFilter>
	);
};

Filter.propTypes = {
	changeInput: PropTypes.func.isRequired,
};
