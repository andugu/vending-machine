import {FC} from 'react';
import {Navigate} from 'react-router-dom';

import {Products} from "../components/product";
import {Wallet} from "../components/wallet";
import {Divider, Stack} from "@mui/material";


export const VendingMachine: FC = () => {
	const user = true; // TODO: Redirect to redux

	if (!user) {
		return <Navigate to='/' replace={true}/>
	}

	return (
		<Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
			<Products />
			<Wallet name={"Josep Maria Olivé"} balance={0}/>
		</Stack>
	)
}