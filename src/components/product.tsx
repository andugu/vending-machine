import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {FC, useEffect, useState} from 'react';

import {api} from "../api";
import {ProductProps} from "../types";
import {LargeBlueButton, MainMessage, MessageColorByType} from "./common";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import { updateBalance } from "../redux/walletSlice";

interface ProductCompProps extends ProductProps {
  handlePurchase: () => void;
}

const Product = ({ id, name, quantity, price, handlePurchase }: ProductCompProps) => {
	const [buttonText, setButtonText] = useState('Buy');
	const dispatch = useDispatch()
	let balance = useSelector((state: RootState) => state.wallet.balance) as number;
	const buyProduct = () => {
		if (quantity <= 0) {
			setButtonText("Unable to buy product, no stock left.");
			return
		} else if (price > balance) {
			setButtonText("Unable to buy product, insufficient balance.");
			return
		}
		try {
			api.buy(id);
			balance -= price;
			balance = parseFloat(balance.toFixed(2));
			dispatch(updateBalance(balance));
			quantity -= 1;
			handlePurchase();
		} catch (error) {
			setButtonText(`An error occurred while trying to buy the product: ${error}`);
		}
	};
	const handleBuyClick = () => {
		buyProduct();
	};

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
				{LargeBlueButton(buttonText, handleBuyClick)}
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
	const handlePurchase = (product_id: string) => {
		if (products) {
			const updatedProducts = products.map((product) =>
				product.id === product_id ? { ...product, quantity: product.quantity - 1 } : product
			);
			setProducts(updatedProducts);
		}
	};

	useEffect(() => {
		if (products === null) {
			fetchProducts();
		}
	});

	if (error) {
		return MainMessage(error, MessageColorByType.ERROR);
	} else if (products !== null) {
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
							<Product id={product.id} name={product.name} quantity={product.quantity} price={product.price} handlePurchase={() => {handlePurchase(product.id)}}/>
						</Grid>
					))}
				</Grid>
			</Box>
		)
	} else {
		return MainMessage("Loading products...", MessageColorByType.NOTICE);
	}
};
