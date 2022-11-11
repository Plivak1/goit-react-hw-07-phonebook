import React, { useState } from 'react';
import { LiContactItem, BtnDelete } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const ContactItem = ({ id, name, phone, deleteBtn }) => {
	const isLoading = useSelector(state => state.contacts.isLoading);
	const [isLoadingLocal, setIsLoadingLocal] = useState(false);
	return (
		<LiContactItem>
			{name}: {phone}
			<BtnDelete
				type="button"
				// disabled={isLoading}
				onClick={() => {
					deleteBtn(id);
					setIsLoadingLocal(true);
				}}
				// onLoad={() => isLoadingLocal && isLoading}
			>
				{isLoadingLocal && isLoading && '...'}
			</BtnDelete>
		</LiContactItem>
	);
};

ContactItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
	deleteBtn: PropTypes.func.isRequired,
};
