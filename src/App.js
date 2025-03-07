import React from 'react';
import { Routes, Route, HashRouter, useNavigate } from 'react-router-dom';
import { Typography, Divider, Container } from '@mui/material';

import './App.css';
import logo from './assets/logo.png';
import HomePage from './home';
import CoursePage from './course';
import MovingRock from './moving-rock';

const App = () => {
	// const isMobile = useMediaQuery('(max-width:600px)');
	// const bodyVariant = isMobile ? 'body2' : 'body1';

	return (
		<>
			<HashRouter basename="/">
				<div className="App">
					<Container sx={{ textAlign: 'right', direction: 'rtl', padding: 0, borderRadius: 0 }}>
						<Header />

						<Routes>
							<Route path="*" element={<HomePage />} />
							<Route path={'/classes' + '/:classId'} element={<CoursePage />} />
						</Routes>

						{/* <Divider sx={{ backgroundColor: 'black', mb: 1, mt: 3 }} /> */}

						{/* <Box mt={2}>
							<Typography variant={isMobile ? 'h7' : 'h6'} fontWeight="bold">
            		platform.io
							</Typography>
							<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
								<Typography variant={bodyVariant} fontWeight="bold">צרו קשר:</Typography>
								<Typography variant={bodyVariant}>info@platform.io</Typography>
							</div>
						</Box> */}
					</Container>
				</div>

			</HashRouter>
			<MovingRock />
		</>
	);
};

export default App;

const Header = () => {
	const navigate = useNavigate();
	return (
		<>
			<div style={{
				display: 'flex',
				alignItems: 'center',
				gap: 4,
				justifyContent: 'end',
				cursor: 'pointer'
			}}
			onClick={() => navigate('/')}>
				<Typography variant="h6" fontWeight="bold" style={{ fontFamily: 'Monomakh' }}>
					platform.io
				</Typography>
				<img
					src={logo}
					style={{ height: 24 }}
				/>
			</div>

			<Divider sx={{ backgroundColor: 'black', height: 2, mb: 2, mt: 1 }} />
		</>
	);
};
