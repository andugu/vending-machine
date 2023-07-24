import Box from "@mui/material/Box";


export enum MessageColorByType {
	ERROR = '#FF9494',
	NOTICE = '#d5d5d5',
	SUCCESS = '#55ad7a',
}

export const MainMessage = (message: string, messageColor: string) => {
	return (
		<Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
            <Box sx={{backgroundColor: messageColor, textAlign: 'center', fontSize: 30, p: 2, borderRadius: 2}}>
                <b>{message}</b>
            </Box>
		</Box>
	)
};
