import React from 'react';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/searchBar';

const Homepage:React.FC = ()=> {
		return(
			<>
			<Header/>
			<SearchBar/>
			<div>
				<h1>Weekly discussion report</h1>
			</div>
			</>
		)
} 

export default Homepage;