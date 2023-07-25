import React, {useState} from "react";
import {Navigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import Box from "@mui/material/Box";
import {InputAdornment, TextField} from "@mui/material";
import Stack from '@mui/material/Stack';
import AccountCircle from '@mui/icons-material/AccountCircle';

import {LargeGreenButton, MainMessage, MessageColorByType} from "./common";
import {api} from "../api";
import { setUserId, setUserName, updateBalance} from "../redux/walletSlice";


export const Login = () => {
	const [textFieldValue, setTextFieldValue] = useState<string>('');
	const [error, setError] = useState<string | null>(null);
	const dispatch = useDispatch()
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTextFieldValue(event.target.value);
	};
	const fetchUserInfo = async () => {
		try {
			let user = await api.login(textFieldValue);
			dispatch(setUserId(user.id));
			dispatch(setUserName(user.user_name));
			dispatch(updateBalance(user.balance));
		} catch (error) {
			setError(`An error occurred on log in: ${error}\nPlease, refresh the page and try again.`);
		}
	};
	const handleSubmitClick = () => {
		fetchUserInfo();
		return <Navigate to='/products' />
	};

	if (error) {
		return MainMessage(error, MessageColorByType.ERROR);
	}
	return (
		<Box sx={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh',
			backgroundColor: '#1e5d88'}}>
			<Box sx={{p: 8, backgroundColor: '#d5d5d5', borderRadius: 4}}>
				<Stack spacing={3}>
					<Box sx={{textAlign: 'center', fontSize: 30, mb: 2}}>
						<b>Login</b>
					</Box>
					<Box>
						<TextField
							id="outlined-basic"
							label="User"
							variant="outlined"
							value={textFieldValue}
							onChange={handleInputChange}
							onKeyPress={(event: React.KeyboardEvent<HTMLDivElement>) => {if (event.key === 'Enter'){handleSubmitClick()}}}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<AccountCircle />
									</InputAdornment>
								),
							}}
						/>
					</Box>
					<Box>
						{LargeGreenButton("Submit", handleSubmitClick)}
					</Box>
				</Stack>
			</Box>
		</Box>
	)
};
