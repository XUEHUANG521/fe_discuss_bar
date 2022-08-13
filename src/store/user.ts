import {createSlice, PayloadAction} from  '@reduxjs/toolkit';
import type { RootState } from './store';
import {get as getStorage, put as putStorage, del as deleteStorage,clearStorage} from '../utils/localStorage';
import JWTdecoder from '../utils/JWTdecoder';
import {user} from '../types/user';

const initialState: user = {
	username: JSON.parse(getStorage('user')).username || null,
	email: JSON.parse(getStorage('user')).email || null,
	role: JSON.parse(getStorage('user')).role || null,
	token:JSON.parse(getStorage('user')).token || null,
}


export const userSlice = createSlice({
	name:'user',
	initialState,
	reducers: {
		addUser: (state: user, action) => {
			const userData = action.payload;
			putStorage('user', userData);
			state.username = userData.email;
			state.email = userData.email;

		},
		removeUser: (state:user) => {
			deleteStorage('user');
			state.username = null;
			state.email = null;
		},

		createCredential :(
			state, {payload: {token}}:PayloadAction<{token : string}>
			) => {
				const {role} = JWTdecoder(token);
				state.role = role;
				state.token = token;
		},

		removeCredential: (state) => {
			clearStorage();
			state.token = null;
			state.email = null;
			state.role = null;
		}
	}
})

export const {addUser, removeUser, createCredential, removeCredential} = userSlice.actions;

export default userSlice.reducer;