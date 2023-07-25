import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {FC, useEffect, useState} from 'react';

import {api} from "../api";
import {ProductProps} from "../types";
import {LargeBlueButton, MainMessage, MessageColorByType} from "./common";

const Product = ({ id, name, quantity, price }: ProductProps) => {
	return (
		<Box>
			<Box sx={{backgroundColor: '#d5d5d5', p: 1, m:1, borderRadius: 2}}>
				<Box sx={{p: 1}}>
					<Box sx={{fontSize: 21}}><b>{name}</b></Box>
					<Box sx={{p: 1}}>{`Stock: ${quantity}`}</Box>
					<Box sx={{p: 1}}>{`Price: ${price}€`}</Box>
				</Box>
			</Box>
			<Box sx={{p: 1, m:1}}>
				{LargeBlueButton("Buy")}
			</Box>
		</Box>
	)
};

export const Products: FC = () => {
	const [products, setProducts] = useState<ProductProps[] | null>(null);
	const [error, setError] = useState<string | null>(null);

	const fetchProducts = async () => {
		try {
			let products_list = await api.getProducts();
			setProducts(products_list);
		} catch (error) {
			setError(`An error occurred while loading products: ${error}`);
		}
	};

	useEffect(() => {
		if (products === null) {
			fetchProducts();
		}
	});

	if (error) {
		return MainMessage(error, MessageColorByType.ERROR);
	} else if (products != null) {
		return (
			<Box sx={{
				backgroundColor: '#334d5c',
				padding: 2,
				mt: 1,
				borderRadius: 4,
			}}>
				<Grid container rowSpacing={4} columnSpacing={{xs: 1, sm: 1, md: 3}}>
					{products.map( (product: ProductProps) => (
						<Grid item xs={6} sm={4}>
							<Product id={product.id} name={product.name} quantity={product.quantity} price={product.price} />
						</Grid>
					))}
				</Grid>
			</Box>
		)
	} else {
		return MainMessage("Loading products...", MessageColorByType.NOTICE);
	}
};
