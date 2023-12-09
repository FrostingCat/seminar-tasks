import { Typography, Grid, Paper, CardContent, Box, CardActions, Button, Container } from '@material-ui/core'
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import "./Grids.css"
import { useState } from 'react';

const themeButtons = createTheme({
	palette: {
		primary: {
			main: '#E3D026',
			light: '#E9DB5D',
			dark: '#A29415',
			contrastText: '#242105',
		},
	},
});

function Grids() {
	const [expanded1, setExpanded1] = useState(false);
	const [expanded2, setExpanded2] = useState(false);
	const [expanded3, setExpanded3] = useState(false);

	const handleExpand1 = () => {
		setExpanded1(true);
		setExpanded2(false);
		setExpanded3(false);
	};

	const handleExpand2 = () => {
		setExpanded1(false);
		setExpanded2(true);
		setExpanded3(false);
	};

	const handleExpand3 = () => {
		setExpanded1(false);
		setExpanded2(false);
		setExpanded3(true);
	};
	return (
		<Container className='container'>
			<Grid className='grids'>
				<Grid className='one-grid' item xs={expanded1 === true ? 5 : 3}>
					<Paper className='paper'>
						<CardContent className='header'>
							<Typography variant="h5">
								Free
							</Typography>
						</CardContent>
						<CardContent className='content'>
							<Box className='box'>
								<Typography variant="h3">
									$0
								</Typography>
								<Typography variant="h6">
									/mo
								</Typography>
							</Box>
							<Typography variant="subtitle1">
								10 users included
							</Typography>
							<Typography variant="subtitle1">
								2 GB of storage
							</Typography>
							<Typography variant="subtitle1">
								Help center access
							</Typography>
							<Typography variant="subtitle1">
								Email support
							</Typography>
						</CardContent>
						<CardActions className='actions'>
							<ThemeProvider theme={themeButtons}>
								<Button className='button' variant="outlined" color="primary" onClick={handleExpand1}>
									Sign up for free
								</Button>
							</ThemeProvider>
						</CardActions>
					</Paper>
				</Grid>
				<Grid className='one-grid' style={{ marginBottom: 55 }} item xs={expanded2 === true ? 5 : 3}>
					<Paper>
						<CardContent className='header'>
							<CardContent className='header-text'>
								<Typography variant="h5">
									Pro
								</Typography>
								<Typography variant="body1" className='body'>
									Most popular
								</Typography>
							</CardContent>
							<img src="https://i.pinimg.com/originals/f4/f3/ba/f4f3ba94175a02c9e5a016dbaa8ae21f.png" className='star' />
						</CardContent>
						<CardContent className='content'>
							<Box className='box'>
								<Typography variant="h3">
									$15
								</Typography>
								<Typography variant="h6">
									/mo
								</Typography>
							</Box>
							<Typography variant="subtitle1">
								20 users included
							</Typography>
							<Typography variant="subtitle1">
								10 GB of storage
							</Typography>
							<Typography variant="subtitle1">
								Help center access
							</Typography>
							<Typography variant="subtitle1">
								Priority email support
							</Typography>
						</CardContent>
						<CardActions>
							<ThemeProvider theme={themeButtons}>
								<Button className='button' variant="contained" color="primary" onClick={handleExpand2}>
									Get started
								</Button>
							</ThemeProvider>
						</CardActions>
					</Paper>
				</Grid>
				<Grid className='one-grid' item xs={expanded3 === true ? 5 : 3}>
					<Paper>
						<CardContent className='header'>
							<Typography variant="h5">
								Enterprise
							</Typography>
						</CardContent>
						<CardContent className='content'>
							<Box className='box'>
								<Typography variant="h3">
									$30
								</Typography>
								<Typography variant="h6">
									/mo
								</Typography>
							</Box>
							<Typography variant="subtitle1">
								50 users included
							</Typography>
							<Typography variant="subtitle1">
								30 GB of storage
							</Typography>
							<Typography variant="subtitle1">
								Help center access
							</Typography>
							<Typography variant="subtitle1">
								Phone & email support
							</Typography>
						</CardContent>
						<CardActions>
							<ThemeProvider theme={themeButtons}>
								<Button className='button' variant="outlined" color="primary" onClick={handleExpand3}>
									Contact us
								</Button>
							</ThemeProvider>
						</CardActions>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Grids;