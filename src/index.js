import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import './index.css';
import App from './App';

const theme = createTheme({
	direction: 'rtl',
	typography: {
		fontFamily: '"AlefMultiGndr", serif',
		color: 'rgb(34, 36, 42)',
	},
	palette: {
		primary: {
			main: 'rgb(34, 36, 42)'
		},
		secondary: {
			main: 'rgb(255, 255, 255)'
		}
	}
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>

	</React.StrictMode>
);
