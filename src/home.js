import React, { useState, useEffect } from 'react';
import {
	Container,
	Typography,
	Box,
	Button,
	Divider,
	useMediaQuery,
} from '@mui/material';

import { courses } from './courses-catalog';
import { CourseCard } from './course-card';
import { RegistrationDialog } from './registrationDialog';

const HomePage = () => {
	const isMobile = useMediaQuery('(max-width:600px)');

	const [showPastCourses, setShowPastCourses] = useState(false);
	const [open, setOpen] = useState(false);

	const futureCourses = courses
		.filter(course => new Date(course.startDateEn) > new Date())
		.sort((a, b) => new Date(b.startDateEn) - new Date(a.startDateEn));

	const pastCourses = courses
		.filter(course => new Date(course.startDateEn) < new Date())
		.sort((a, b) => new Date(b.startDateEn) - new Date(a.startDateEn));

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Container sx={{ textAlign: 'center', mt: 4 }}>
				<Typography variant={isMobile ? 'h5' : 'h3'} fontWeight="bold" gutterBottom>
        להיפגש. להתפתח. ליהנות.
				</Typography>
				<Typography variant={isMobile ? 'body1' : 'h6'} color="textSecondary" gutterBottom>
				צאו מהבית, תכירו אנשים ותלמדו דברים חדשים.
				</Typography>
				<Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
					{futureCourses.map(course => <CourseCard course={course} key={course.id} />)}
				</Box>
				{!showPastCourses ? (
					<Button
						variant="outlined"
						sx={{ mt: 4 }}
						onClick={() => setShowPastCourses(!showPastCourses)}
					>
				הצג סדנאות קודמות
					</Button>
				) : (
					<>
						<Divider sx={{ mt: 4 }} />
						<Typography
							variant="h5"
							fontWeight="bold"
							sx={{ mt: 4, textAlign: 'start' }}
						>
						סדנאות קודמות
						</Typography>
					</>
				)
				}
				{showPastCourses && (
					<Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
						{pastCourses.map(course =>
							<CourseCard course={course} key={course.id} />
						)}
					</Box>
				)}
				<Box sx={{ mt: 6, textAlign: 'center', padding: 4, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
					<Typography variant={isMobile ? 'body1' : 'h5'} fontWeight="bold" gutterBottom>
					רוצים לפתוח סדנה משלכם?
					</Typography>
					<Typography variant={isMobile ? 'body2' : 'body1'} color="textSecondary" gutterBottom>
					יש לכם רעיון לקורס או סדנה? בואו נהפוך אותו למציאות יחד!
					</Typography>
					<Button variant="contained" sx={{ mt: 2 }} onClick={() => setOpen(true)}>
					צרו קשר
					</Button>
				</Box>

			</Container>

			<RegistrationDialog
				open={open}
				handleClose={() => setOpen(false)}
			/>
		</>
	);
};

export default HomePage;
