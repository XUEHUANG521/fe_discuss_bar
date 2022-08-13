import {createSlice, PayloadAction} from  '@reduxjs/toolkit';
import type { RootState } from './store';
import {get as getStorage, put as putStorage, del as deleteStorage,clearStorage} from '../utils/localStorage';
import {user, token} from '../types/user';

const storedUser: user = JSON.parse(getStorage('user'));
const storedToken: token = JSON.parse(getStorage('token'));
const initialState: user = {
	username: storedUser?.username || '',
	email: storedUser?.email || '',
	role: storedUser?.role || '',
	token:storedToken?.token || '',
}


export const userSlice = createSlice({
	name:'user',
	initialState,
	reducers: {
		addUser: (state: user, action) => {
			const userData = action.payload;
			putStorage('user', userData);
			state.username = userData.username;
			state.email = userData.email;
			state.role = userData.role;

		},
		removeUser: (state:user) => {
			deleteStorage('user');
			state.username = null;
			state.email = null;
			state.email = null;
			state.role = null;
		},

		createCredential :(
			state:user, {payload: {token}}:PayloadAction<{token : string}>
			) => {
				console.log('token in create Credential ' + token);
				state.token = token;
		},

		removeCredential: (state:user) => {
			clearStorage();
			state.token = null;
		}
	}
})

export const {addUser, removeUser, createCredential, removeCredential} = userSlice.actions;
export const selectToken = (state: RootState) => state.user.token;

export default userSlice.reducer;