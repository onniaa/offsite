import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	Container,
	Typography,
	Button,
	Box,
	Divider,
	useMediaQuery,
} from '@mui/material';
import { grey } from '@mui/material/colors';

import { courses } from './courses-catalog';
import { RegistrationDialog } from './registrationDialog';
import { AvailabilityChip } from './availabilty-chip';

const CoursePage = () => {
	const { classId } = useParams();
	const isMobile = useMediaQuery('(max-width:600px)');
	const bodyVariant = isMobile ? 'body2' : 'body1';
	window.scrollTo(0, 0);

	const [open, setOpen] = useState(false);

	const course = courses.find(course => course.id === classId);
	if (!course) {
		return <Typography variant={bodyVariant}>לא נמצאה סדנה</Typography>;
	}

	const {
		teacher,
		title,
		description,
		duration,
		startDate,
		time,
		location,
		price,
		image,
	} = course;

	const isPast = new Date(course.startDateEn) < new Date();

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
		<>
			<Container sx={{ textAlign: 'right', direction: 'rtl', padding: 0, borderRadius: 0 }}>

				<Box sx={{ width: '100%', height: isMobile ? 150 : 250, bgcolor: 'grey.300', mb: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<img
						src={image}
						alt="תמונת אירוע"
						style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px 4px 0px 0px' }}
					/>
				</Box>

				<Box sx={{ mt: 0, backgroundColor: grey[200], borderRadius: '0px 0px 4px 4px', padding: 2 }}>
					<Typography variant={isMobile ? 'h6' : 'h4'} gutterBottom sx={{ fontWeight: 'bold' }}>
						{title}
					</Typography>

					<Typography variant={bodyVariant} gutterBottom>
						{description}
					</Typography>
					<Typography variant={bodyVariant} gutterBottom>
                —
					</Typography>

					<div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
						<Typography variant={bodyVariant} gutterBottom>
							<span style={{ fontWeight: 'bold' }}>{teacher.name}, </span>
							<span>
								{teacher.bio}
							</span>
						</Typography>
					</div>
				</Box>

				<Divider sx={{ my: 2 }} />

				<DetailSection title='מספר מפגשים' value={duration} />
				<DetailSection title='תאריך התחלה' value={startDate} />
				<DetailSection title='שעה' value={time} />
				<DetailSection title='מיקום' value={location} />
				<DetailSection title='מחיר' value={`${price}*`} />

				<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
					<Typography variant={bodyVariant}fontWeight="bold">מספר משתתפים:</Typography>
					<Typography variant={bodyVariant}>{course.spots.total}</Typography>
					<AvailabilityChip availableSpots={course.spots.available} />
				</div>
				<Divider sx={{ my: 1 }} />

				<Box textAlign="center" my={3}>
					<Button
						onClick={() => setOpen(true)}
						variant={course.spots.available && !isPast ? 'contained' : 'outlined'}
						size="large"
						sx={{ width: '100%' }}
					>
						{isPast ? 'הרשמה למחזור הבא' : course.spots.available ? 'להרשמה' : 'לרשימת המתנה'}
					</Button>
				</Box>

				<Divider sx={{ my: 3 }} />

				<Typography variant={bodyVariant} gutterBottom>
          *לא מרוצים? תקבלו 100% מכספכם בחזרה - ללא שאלות!
				</Typography>

			</Container>

			<RegistrationDialog
				open={open}
				handleClose={() => setOpen(false)}
				isPayment={course.spots.available && !isPast}
			/>
		</>
	);
};

export default CoursePage;
