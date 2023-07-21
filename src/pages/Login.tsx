import {FC} from 'react';
import {Navigate} from 'react-router-dom';

import {Login} from "../components/login";

export const LoginPage: FC = () => {

	const user = false; // TODO connect to the redux store and retrieve the user name

	// if user, no need to login again, redirect to vending machine home
  if (user) {
		return <Navigate to='/vending-machine' />
	}

	return <Login />
}