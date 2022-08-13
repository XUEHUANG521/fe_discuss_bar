import React, { useState, useEffect } from 'react';
// import lodash from 'lodash';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hook';
import {selectToken} from '../store/user';

interface Props {
  Component: React.FC;
}

const PrivateRoute:React.FC<Props> = ({
  Component
}) => {
	const token = useAppSelector(selectToken);
	const [authenticated, setAuthenticated] = useState(token === '' ? false : true);

	useEffect(() => {
	const status = token === '' ? false : true;
	setAuthenticated(status);
	}, [token]);

	if (authenticated) {
	return <Component />
	}
	return <Navigate to="/login" />;
};

export default PrivateRoute;