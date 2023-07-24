import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";

import {UserProps} from "../types";
import {BlueButton, LargeGreenButton} from "./common";

const RechargeOptions = {
	"0,10€": 0.1,
	"0,20€": 0.2,
	"0,50€": 0.5,
	"1€": 1,
	"2€": 2,
	"5€": 5
}


export const Wallet = ({user_name, full_name, balance}: UserProps) => {
	return (
		<Box sx={{backgroundColor: '#334d5c', borderRadius: 4}}>
			<Box sx={{m: 2, paddingY: 2}}>
				<Box sx={{backgroundColor: '#d5d5d5', p: 1, borderRadius: 2}}>
					<Box sx={{textAlign: 'right', fontSize: 20}}><b>{full_name}</b></Box>
				</Box>
				<Box sx={{backgroundColor: '#d5d5d5', mt: 3, paddingY: 3, paddingX: '10%', borderRadius: 2}}>
					<Box sx={{mb: 2}}><b>Add money</b></Box>
					<Grid container wrap="wrap" rowSpacing={4} columnSpacing={{xs: 1, sm: 3, md: 3}}>
						{Object.keys(RechargeOptions).map((option) => (
							<Grid item sm={6} md={4}>
								<Box sx={{p: 1, m:1}}>
									{BlueButton(option, 'large')}
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
					{LargeGreenButton("Refund money")}
				</Box>
			</Box>
		</Box>
	)
}