import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem';
import { UlContactList } from './ContactList.styled';

export const ContactList = ({ contacts, deleteBtn }) => {
	return (
		<UlContactList>
			{contacts.map(({ id, name, phone }) => {
				return (
					<ContactItem
						key={id}
						id={id}
						name={name}
						phone={phone}
						deleteBtn={deleteBtn}
					/>
				);
			})}
		</UlContactList>
	);
};

ContactList.propTypes = {
	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			phone: PropTypes.string.isRequired,
			createdAt: PropTypes.string.isRequired,
		})
	),
	deleteBtn: PropTypes.func.isRequired,
};
