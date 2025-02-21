import React, { useState, useEffect } from 'react';
import {
	Container,
	Typography,
	Box,
	Button,
	Divider,
	useMediaQuery,
	Chip,
} from '@mui/material';

import { courses } from './courses-catalog';
import { CourseCard, getTagColor } from './course-card';
import { ContactDialog } from './contact-dialog';

const HomePage = () => {
	const isMobile = useMediaQuery('(max-width:600px)');

	const [showPastCourses, setShowPastCourses] = useState(false);
	const [open, setOpen] = useState(false);
	const [selctedTag, setSelectedTag] = useState('');

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [selctedTag]);

	const filteredByTags = !selctedTag ? courses : courses.filter(course => course.tags.includes(selctedTag));

	const futureCourses = filteredByTags
		.filter(course => new Date(course.startDateEn) > new Date())
		.sort((a, b) => new Date(b.startDateEn) - new Date(a.startDateEn));

	const pastCourses = filteredByTags
		.filter(course => new Date(course.startDateEn) < new Date())
		.sort((a, b) => new Date(b.startDateEn) - new Date(a.startDateEn));

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// const randomQuote = quotes[new Date().getDate() % quotes.length];

	return (
		<>
			<Container sx={{ textAlign: 'center', mt: 4 }}>
				<Typography variant={isMobile ? 'h5' : 'h3'} fontWeight="bold" gutterBottom>
        	להיפגש. ללמוד. להתפתח.
				</Typography>
				{/* <Typography
					variant={isMobile ? 'body1' : 'h6'}
					color="textSecondary"
					sx={{ direction: 'ltr' }}
				>
					<span style={{ fontStyle: 'italic' }}>
						{`"${randomQuote.quote}"`}
					</span>
					<br />
					<span style={{ fontWeight: 'bold' }}>- {randomQuote.source}</span>
				</Typography> */}
				{selctedTag && (
					<div style={{ display: 'flex', justifyContent: 'center', direction: 'ltr' }}>
						<Chip
							label={selctedTag}
							onDelete={() => setSelectedTag('')}
							variant='filled'
							sx={{
								mt: 2,
								backgroundColor: getTagColor(selctedTag),
								color: 'white',
							}}
						/>
					</div>
				)}

				<Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
					<>
						{futureCourses.map(course =>
							<CourseCard
								key={course.id}
								course={course}
								selectedTag={selctedTag}
								setSelectedTag={setSelectedTag}
							/>
						)}
						{selctedTag && futureCourses.length === 0 && (
							<Typography variant={isMobile ? 'body1' : 'h5'} color="textSecondary">
								אין כרגע סדנאות עתידיות בנושא
								<span style={{ fontWeight: 'bold' }}>{` "${selctedTag}"`}</span>
							</Typography>
						)}
					</>
				</Box>

				{pastCourses.length > 0 && (
					<>
						{!showPastCourses ? (
							<Button
								variant="outlined"
								sx={{ mt: 4, mb: 4 }}
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
						)}
					</>
				)}

				{showPastCourses && (
					<Box sx={{ mt: 4, mb: 2, display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
						{pastCourses.map(course =>
							<CourseCard
								key={course.id}
								course={course}
								selectedTag={selctedTag}
								setSelectedTag={setSelectedTag}
							/>
						)}
					</Box>
				)}

				<Box sx={{ textAlign: 'center', padding: 4, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
					<Typography variant={isMobile ? 'body1' : 'h5'} fontWeight="bold" gutterBottom>
					רוצים לפתוח סדנה משלכם?
					</Typography>
					<Typography variant={isMobile ? 'body2' : 'body1'} color="textSecondary" gutterBottom>
					יש לכם רעיון לקורס או סדנה? בואו נהפוך אותו למציאות יחד!
					</Typography>
					<Button
						variant="contained"
						sx={{ mt: 2 }}
						onClick={() => setOpen(true)}
					>
					צרו קשר
					</Button>
				</Box>

			</Container>

			<ContactDialog
				open={open}
				handleClose={() => setOpen(false)}
			/>
		</>
	);
};

export default HomePage;

// const quotes = [
// 	{
// 		quote: 'The beautiful thing about learning is that nobody can take it away from you.',
// 		source: 'B.B. King',
// 	},
// 	{
// 		quote: 'It is not true that people stop pursuing dreams because they grow old, they grow old because they stop pursuing dreams.',
// 		source: 'Gabriel Garcia Marquez',
// 	},
// 	{
// 		quote: 'We shall not cease from exploration, and the end of all our exploring will be to arrive where we started and know the place for the first time.',
// 		source: 'T.S. Eliot',
// 	},
// 	{
// 		quote: 'The more that you read, the more things you will know. The more that you learn, the more places you’ll go.',
// 		source: 'Dr. Seuss',
// 	},
// ];
