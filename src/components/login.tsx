import {Navigate} from 'react-router-dom';

import Box from "@mui/material/Box";
import {InputAdornment, TextField} from "@mui/material";
import Stack from '@mui/material/Stack';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {LargeGreenButton} from "./common";

export const Login = () => {

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
						{LargeGreenButton("Submit")}
					</Box>
				</Stack>
			</Box>
		</Box>
	)
};