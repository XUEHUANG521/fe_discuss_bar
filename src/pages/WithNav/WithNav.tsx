import React from 'react';
import AddPost from '../Post/AddPost/AddPost';
import PrivateRoute from '../../route/privateRoute';
import Header from '../../components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';

const WithNavs:React.FC = ()=> {
		return(
			<>
			<Header/>
			<Routes>
				<Route path='/addpost' element={<PrivateRoute Component={AddPost} />} />
				<Route path="/" element={<Homepage/>} />
			</Routes>
			</>
			
		)
} 

export default WithNavs;