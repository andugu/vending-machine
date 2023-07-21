import {Navigate} from 'react-router-dom';

import Box from "@mui/material/Box";
import {InputAdornment, TextField} from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import AccountCircle from '@mui/icons-material/AccountCircle';

export const Login = () => {

	return (
		<Box sx={{p: 1, m:1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
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
				<Box sx={{textAlign: 'center', fontSize: 30}}>
					<Button size='large' sx={{
						backgroundColor: '#55ad7a',
						color: 'white',
						display: 'block',
						width: '100%',
						'&:hover': {backgroundColor: '#50ad7a'}
					}}>Submit</Button>
				</Box>
			</Stack>
		</Box>
	)
};