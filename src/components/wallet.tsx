import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";

interface UserProps {
	name: string;
	balance: number;
}

const RechargeOptions = {
	"0,10€": 0.1,
	"0,20€": 0.2,
	"0,50€": 0.5,
	"1€": 1,
	"2€": 2,
	"5€": 5
}


export const Wallet = ({ name, balance }: UserProps) => {
	return (
		<Box sx={{backgroundColor: '#334d5c', borderRadius: 4}}>
			<Box sx={{m: 2, p: 1}}>
				<Box sx={{backgroundColor: '#d5d5d5', p: 1, borderRadius: 1}}>
					<Box sx={{textAlign: 'right', fontSize: 15}}><b>{name}</b></Box>
				</Box>
				<Box>
					<Box>Add money</Box>
					<Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
						{Object.keys(RechargeOptions).map((option) => (
							<Grid item xs={6} sm={3}>
								<Button sx={{backgroundColor: '#1e5d88', color: 'white', '&:hover': {backgroundColor: '#334d5c'}}}>{option}</Button>
							</Grid>
						))}
					</Grid>
				</Box>
			</Box>
		</Box>
	)
}