import {createSlice, PayloadAction} from  '@reduxjs/toolkit';
import type { RootState } from './store';
import { Ipost, PostList } from '../types/post';

const post: Ipost = {
	postId: '',
	creator: '',
	title: '',
	category: '',
	content: '',
}

const post_list:Ipost[] = [];

const initialState:PostList = {
	posts: [],
}