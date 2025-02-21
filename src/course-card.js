import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Typography,
	Box,
	Card,
	CardContent,
	Button,
	CardMedia,
	Tooltip,
	useMediaQuery,
	Chip,
	Avatar,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
	green,
	blue,
	purple,
	pink,
	indigo,
	teal,
	cyan,
} from '@mui/material/colors';

import { AvailabilityChip } from './availabilty-chip';

export const CourseCard = ({ course, selectedTag, setSelectedTag }) => {
	const navigate = useNavigate();
	const isPast = new Date(course.startDateEn) < new Date();
	const isMobile = useMediaQuery('(max-width:600px)');
	const bodyVariant = isMobile ? 'body2' : 'body1';

	return (
		<Card
			key={course.id}
			sx={{
				width: 350,
				maxHeight: 600,
				margin: 'auto',
				mb: 3,
				borderRadius: 3,
				overflow: 'hidden',
				boxShadow: 3,
			}}
		>
			<CardMedia
				onClick={() => navigate(`/classes/${course.id}`)}
				component="img"
				height="140"
				image={course.image}
				alt={course.title}
				sx={{ cursor: 'pointer' }}
			/>
			<CardContent sx={{ textAlign: 'right', padding: 3 }}>
				<Tooltip title={course.title} arrow>
					<Typography
						variant={isMobile ? 'h7' : 'h6'}
						fontWeight="bold"
						sx={{
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							display: 'block',
						}}
					>
						{course.title}
					</Typography>
				</Tooltip>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
					<Avatar
						src={course.teacher.image}
						sx={{
							width: 32,
							height: 32,
							boxShadow: 2,
							border: '1px solid white',
						}}
					/>
					<Typography variant={bodyVariant} color="textSecondary">
						{course.teacher.name}
					</Typography>
				</Box>
				<div
					onClick={(e) => e.stopPropagation()}
					style={{
						display: 'flex',
						gap: 8,
						flexWrap: 'wrap',
						marginTop: 12,
					}}
				>
					{course.tags.map(tag => (
						<Chip
							key={tag}
							label={tag}
							size="small"
							variant={tag === selectedTag ? 'filled' : 'outlined'}
							sx={{
								borderColor: getTagColor(tag),
								borderWidth: 2,
								backgroundColor: tag === selectedTag ? getTagColor(tag) : '',
								'&:hover': {
									backgroundColor: tag === selectedTag ? getTagColor(tag) : 'black',
								},
								color: tag === selectedTag ? 'white' : 'black',
							}}
							onClick={() => {
								if (tag === selectedTag) {
									setSelectedTag('');
								} else {
									setSelectedTag(tag);
								}
							}}
						/>
					))}
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<CalendarMonthIcon fontSize="small" />
						<Typography variant={bodyVariant}>{course.startDate}</Typography>
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<AccessTimeIcon fontSize="small" />
						<Typography variant={bodyVariant}>{course.time}</Typography>
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<LocationOnIcon fontSize="small" />
						<Typography variant={bodyVariant}>{course.location}</Typography>
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<PeopleIcon fontSize="small" />
						<Typography variant={bodyVariant}>{course.spots.total} משתתפים</Typography>
						{!isPast && <AvailabilityChip availableSpots={course.spots.available} />}
					</Box>
				</div>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<Button
						variant={course.spots.available && !isPast ? 'contained' : 'outlined'}
						sx={{ mt: 2 }}
						onClick={() => navigate(`/classes/${course.id}`)}
					>
						{isPast ? 'לפרטים נוספים' : course.spots.available ? 'להרשמה' : 'לרשימת המתנה'}
					</Button>
					<Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
						{course.price}
					</Typography>
				</div>
			</CardContent>
		</Card>
	);
};

export const getTagColor = (tag) => {
	const colors = [green, blue, purple, pink, indigo, teal, cyan];
	const index = tag.charCodeAt(Math.round(tag.length / 2)) % colors.length;
	return colors[index][300];
};
