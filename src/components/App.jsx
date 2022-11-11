// import { useState, useEffect } from 'react';
import { Box } from './Box';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { TitlePhonebook, SecondTitlePhonebook } from './App.styled';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from "../redux/contactsSlice";
import {fetchContacts, addContact, deleteContact} from '../redux/operations'
import { useEffect } from 'react';

export function App() {
	const state = useSelector(state => state);
	const dispatch = useDispatch();

	if (state.contacts.error) {
		Report.failure(`Error. Pls try again`);
	}

	useEffect(() => {
		dispatch(fetchContacts())
	}, [dispatch])

	const setValueSubmitForm = data => {
		if (checkAddingContacts(data.name)) {
			Report.info(`${data.name} is already in contacts!`);
			return;
		}

		dispatch(addContact(data));
		
	};


	const checkAddingContacts = name => {
		return state.contacts.items.find(el => el.name.toLowerCase() === name.toLowerCase());
	};

	const filterContacts = () => {
		const lowerFilter = state.filter.toLowerCase();
		return state.contacts.items.filter(el => {
			return el.name.toLowerCase().includes(lowerFilter);
		});
	};


	const visibleContacts = filterContacts();

	return (
		<Box
			width="800px"
			pb={2}
			pt={2}
			pl={6}
			pr={6}
			ml="auto"
			mr="auto"
			mt={5}
			mb={5}
			minHeight="1000px"
			borderRadius="10px"
			boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
		>
			<TitlePhonebook>Phonebook</TitlePhonebook>
			<ContactForm submitForm={setValueSubmitForm} />
			<SecondTitlePhonebook>Contacts</SecondTitlePhonebook>
			<Filter changeInput={(e) => dispatch(changeFilter(e.currentTarget.value))} />
			<ContactList
				contacts={visibleContacts}
				deleteBtn={(id) => dispatch(deleteContact(id))}
			/>
		</Box>
	);
}
