import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export enum MessageColorByType {
	ERROR = '#FF9494',
	NOTICE = '#d5d5d5',
	SUCCESS = '#55ad7a',
}

export const MainMessage = (message: string, messageColor: string) => {
	return (
		<Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <Box sx={{backgroundColor: messageColor, textAlign: 'center', fontSize: 30, p: 2, borderRadius: 2}}>
                <b>{message}</b>
            </Box>
		</Box>
	)
};

export const LargeGreenButton = (text: string, handleClick = () => {}) => {
	return (
		<Button size='large' onClick={handleClick} sx={{
			backgroundColor: '#55ad7a',
			color: 'white',
			display: 'block',
			width: '100%',
			'&:hover': {backgroundColor: '#50ad7a'}
		}}>{text}</Button>
	)
}

export const BlueButton = (text: string, size: string = 'medium') => {
	return (
		<Button sx={{
			size: {size},
			backgroundColor: '#1e5d88',
			color: 'white',
			display: 'block',
			width: '100%',
			'&:hover': {backgroundColor: '#334d5c'}
		}}>{text}</Button>
	)
}