import React, {useState} from "react";
import {Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";

import {RootState} from "../store";
import {api} from "../api";
import {LargeBlueButton, LargeDarkBlueButton, LargeGreenButton, MainMessage, MessageColorByType} from "./common";
import {setUserId, setUserName, updateBalance} from "../redux/walletSlice";
import {RechargeOptionsType} from "../types";

const RechargeOptions: RechargeOptionsType = {
	"0,10€": 0.1,
	"0,20€": 0.2,
	"0,50€": 0.5,
	"1€": 1,
	"2€": 2,
	"5€": 5
}

export const Wallet = () => {
	const [error, setError] = useState<string | null>(null);
	const dispatch = useDispatch()
	const id: string | null = useSelector((state: RootState) => state.wallet.id)
	const user_name: string | null = useSelector((state: RootState) => state.wallet.user_name)
	let balance: number | null = useSelector((state: RootState) => state.wallet.balance)
	const setBalance = (amount: number) => {
		balance = parseFloat(amount.toFixed(2));
		api.patchBalance(id as string, balance);
		dispatch(updateBalance(balance));
	};
	const logout = async () => {
		try {
			await api.logout();
			dispatch(setUserId(null));
			dispatch(setUserName(null));
			dispatch(updateBalance(null));
			return <Navigate to='/' replace={true}/>
		} catch (error) {
			setError(`An error occurred on log out: ${error}\nPlease, refresh the page and try again.`);
		}
	};
	const handleAddMoneyClick = (amount: number) => {
		balance = balance as number;
		balance += amount;
		setBalance(balance)
	};
	const handleRefundClick = () => {
		setBalance(0);
	};
	const handleLogoutClick = () => {
		logout();
	};

	if (error) {
		return MainMessage(error, MessageColorByType.ERROR);
	}
	return (
		<Box sx={{backgroundColor: '#334d5c', borderRadius: 4}}>
			<Box sx={{m: 2, paddingY: 2}}>
				<Box sx={{backgroundColor: '#d5d5d5', p: 1, borderRadius: 2}}>
					<Box sx={{textAlign: 'right', fontSize: 20}}><b>{user_name}</b></Box>
				</Box>
				<Box sx={{backgroundColor: '#d5d5d5', mt: 3, paddingY: 3, paddingX: '10%', borderRadius: 2}}>
					<Box sx={{mb: 2}}><b>Add money</b></Box>
					<Grid container wrap="wrap" rowSpacing={4} columnSpacing={{xs: 1, sm: 3, md: 3}}>
						{Object.keys(RechargeOptions).map((option) => (
							<Grid item sm={6} md={4}>
								<Box sx={{p: 1, m:1}}>
									{LargeBlueButton(option, () => handleAddMoneyClick(RechargeOptions[option]))}
								</Box>
							</Grid>
						))}
					</Grid>
				</Box>
				<Box sx={{backgroundColor: '#d5d5d5', mt: 3, paddingY: 3, borderRadius: 2}}>
					<Box sx={{textAlign: 'center', fontSize: 30}}>
						<b>Balance: {balance}€</b>
					</Box>
				</Box>
				<Box sx={{mt: 3}}>
					{LargeGreenButton("Refund money", handleRefundClick)}
				</Box>
				<Box sx={{mt: 3}}>
					{LargeDarkBlueButton("Logout", handleLogoutClick)}
				</Box>
			</Box>
		</Box>
	)
}
