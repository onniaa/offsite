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
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { AvailabilityChip } from './availabilty-chip';

export const CourseCard = ({ course }) => {
	const navigate = useNavigate();
	const isPast = new Date(course.startDateEn) < new Date();

	return (
		<Card key={course.id} sx={{ width: 350, maxHeight: 500, margin: 'auto', mb: 3, borderRadius: 3, overflow: 'hidden', boxShadow: 3 }}>
			<CardMedia
				component="img"
				height="140"
				image={course.image}
				alt={course.title}
			/>
			<CardContent sx={{ textAlign: 'right', padding: 3 }}>
				<Tooltip title={course.title} arrow>
					<Typography
						variant="h6"
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
				<Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
					{course.instructor}
				</Typography>
				<Typography variant="body2" color="textSecondary">
					{course.teacher.name}
				</Typography>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<CalendarMonthIcon fontSize="small" />
						<Typography variant="body2">{course.startDate}</Typography>
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<AccessTimeIcon fontSize="small" />
						<Typography variant="body2">{course.time}</Typography>
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<LocationOnIcon fontSize="small" />
						<Typography variant="body2">{course.location}</Typography>
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<PeopleIcon fontSize="small" />
						<Typography variant="body2">{course.spots.total} משתתפים</Typography>
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
