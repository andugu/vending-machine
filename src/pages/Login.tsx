import {FC} from 'react';
import {Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux'

import type { RootState } from '../store'
import {Login} from "../components/login";

export const LoginPage: FC = () => {
	const user_name: string | null = useSelector((state: RootState) => state.wallet.user_name)
	if (user_name !== null) {
		return <Navigate to='/products' />
	}
	return <Login />
}
