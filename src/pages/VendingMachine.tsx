import {FC} from 'react';
import {Navigate} from 'react-router-dom';

import {Products} from "../components/product";
import {Wallet} from "../components/wallet";
import Grid from "@mui/material/Grid";


export const VendingMachine: FC = () => {
	const user = true; // TODO: Redirect to redux

	if (!user) {
		return <Navigate to='/' replace={true}/>
	}

	return (
		<Grid container spacing={2}>
			<Grid item xs={6}>
				<Products />
			</Grid>
			<Grid item xs={6}>
				<Wallet user_name={"Goatsep"} full_name={"Josep Maria Olivé"} balance={0}/>
			</Grid>
		</Grid>
	)
}