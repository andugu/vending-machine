import {FC} from 'react';
import {Navigate} from 'react-router-dom';
import {useSelector} from "react-redux";
import Grid from "@mui/material/Grid";

import {RootState} from "../store";
import {Products} from "../components/product";
import {Wallet} from "../components/wallet";


export const VendingMachine: FC = () => {
	const user_name: string | null = useSelector((state: RootState) => state.wallet.user_name)
	if (user_name === null) {
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
