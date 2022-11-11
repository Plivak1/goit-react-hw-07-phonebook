import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://636eb062f2ed5cb047cd7e01.mockapi.io';

export const fetchContacts = createAsyncThunk(
	'contacts/fetchAll',

	async (_, thunkAPI) => {
		try {
			const response = await axios.get('/contacts');
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const addContact = createAsyncThunk(
	'contacts/addContact',

	async (item, thunkAPI) => {
		try {
			const response = await axios.post('/contacts', item);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const deleteContact = createAsyncThunk(
	'contacts/deleteContact',

	async (id, thunkAPI) => {
		try {
			const response = await axios.delete(`/contacts/${id}`);
			console.log('response', response);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);
