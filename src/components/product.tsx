import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


interface ProductProps {
	name: string;
	stock: number;
	price: number;
}

const Product = ({ name, stock, price }: ProductProps) => {
	return (
		<Box>
			<Box sx={{backgroundColor: '#d5d5d5', p: 1, m:1, borderRadius: 4}}>
				<Box sx={{p: 1}}>
					<Box sx={{fontSize: 21}}><b>{name}</b></Box>
					<Box sx={{p: 1}}>{`Stock: ${stock}`}</Box>
					<Box sx={{p: 1}}>{`Price: ${price}€`}</Box>
				</Box>
			</Box>
			<Box sx={{p: 1, m:1, display: 'flex', justifyContent: 'center'}}>
				<Button sx={{backgroundColor: '#1e5d88', color: 'white', display: 'block', width: '100%', '&:hover': {backgroundColor: '#334d5c'}}}>Buy</Button>
			</Box>
		</Box>
	)
};

export const Products = () => {
	const get_products = (): ProductProps[] => {
		// TODO: Replace by real call
		return [
			{name: "Redbull", stock: 4, price: 5},
			{name: "Fanta", stock: 4, price: 5},
			{name: "Coca Cola Zero", stock: 4, price: 5000},
			{name: "Oreo cookies", stock: 3, price: 5000},
			{name: "Coca Cola", stock: 4, price: 10000},
		]
	};

	return (
		<Box sx={{
			backgroundColor: '#334d5c',
			padding: 2,
			borderRadius: 4,
		}}>
			<Grid container rowSpacing={4} columnSpacing={{xs: 1, sm: 1, md: 7}}>
				{get_products().map( (product: ProductProps) => (
					<Grid item xs={6} sm={4}>
						<Product name={product.name} stock={product.stock} price={product.price} />
					</Grid>
				))}
			</Grid>
		</Box>
	)
};