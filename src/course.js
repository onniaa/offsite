import React, { useState } from 'react';
import {
	Container,
	Typography,
	Button,
	Box,
	Divider,
	useMediaQuery,
	Chip,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { purple } from '@mui/material/colors';

import { courseDetails } from './course-details';
import cover from './assets/cover.jpeg';
import RegistrationDialog from './registrationDialog';

const theme = createTheme({
	direction: 'rtl',
	typography: {
		fontFamily: ['Greta, GretaLangs, serif'],
		color: 'rgb(34, 36, 42)'
	},
});

const CoursePage = () => {
	const isMobile = useMediaQuery('(max-width:600px)');
	const bodyVariant = isMobile ? 'body2' : 'body1';

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const DetailSection = ({ title, value }) => {
		return (
			<>
				<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
					<Typography variant={bodyVariant}fontWeight="bold">
						{title}:
					</Typography>
					<Typography variant={bodyVariant}>
						{value}
					</Typography>
				</div>

				<Divider sx={{ my: 1 }} />
			</>
		);
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container sx={{ textAlign: 'right', direction: 'rtl', padding: 0, borderRadius: 0 }}>
				<div style={{ textAlign: 'end' }}>
					<Typography variant='h7' fontWeight="bold">
            platform.io
					</Typography>
				</div>

				<Divider sx={{ backgroundColor: 'black', height: 2, mb: 2, mt: 1 }} />

				<Box sx={{ width: '100%', height: isMobile ? 150 : 250, bgcolor: 'grey.300', mb: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<img
						src={cover}
						alt="תמונת אירוע"
						style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px 4px 0px 0px' }}
					/>
				</Box>

				<Box sx={{ mt: 0, backgroundColor: purple[100], borderRadius: '0px 0px 4px 4px', padding: 2 }}>
					<Typography variant={isMobile ? 'h6' : 'h4'} gutterBottom sx={{ fontWeight: 'bold' }}>
						{courseDetails.title}
					</Typography>

					<Typography variant={bodyVariant} gutterBottom>
						{courseDetails.description}
					</Typography>
					<Typography variant={bodyVariant} gutterBottom>
                —
					</Typography>

					<div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
						<Typography variant={bodyVariant} gutterBottom>
							<span style={{ fontWeight: 'bold' }}>{courseDetails.teacher.name}, </span>
							<span>
								{courseDetails.teacher.bio}
							</span>
						</Typography>
					</div>
				</Box>

				<Divider sx={{ my: 2 }} />

				<DetailSection title='מספר מפגשים' value={courseDetails.duration} />
				<DetailSection title='תאריך התחלה' value={courseDetails.startDate} />
				<DetailSection title='שעה' value={courseDetails.time} />
				<DetailSection title='מיקום' value={courseDetails.location} />
				<DetailSection title='מחיר' value={courseDetails.price} />

				<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
					<Typography variant={bodyVariant}fontWeight="bold">מספר משתתפים:</Typography>
					<Typography variant={bodyVariant}>15</Typography>
					<Chip size='small' label="נותרו 3 מקומות פנויים" color="success" sx={{ my: 1 }} />
				</div>
				<Divider sx={{ my: 1 }} />

				<Box textAlign="center" my={3}>
					<Button
						onClick={handleClickOpen}
						variant="contained"
						size="large"
						sx={{ width: '100%', backgroundColor: 'rgb(34, 36, 42)', color: 'white' }}
					>
            הזמן עכשיו
					</Button>
				</Box>

				<Divider sx={{ my: 3 }} />

				<Typography variant={bodyVariant} gutterBottom>
          *לא מרוצים? תקבלו 100% מכספכם בחזרה - ללא שאלות!
				</Typography>

				<Box mt={4}>
					<Typography variant={isMobile ? 'h7' : 'h6'} fontWeight="bold">
            		  platform.io
					</Typography>
					<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
						<Typography variant={bodyVariant} fontWeight="bold">צרו קשר:</Typography>
						<Typography variant={bodyVariant}>info@platform.io</Typography>
					</div>
				</Box>
			</Container>

			<RegistrationDialog open={open} handleClose={handleClose}/>

		</ThemeProvider>
	);
};

export default CoursePage;
