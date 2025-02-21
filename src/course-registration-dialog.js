import React, { useState } from 'react';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	TextField,
	Box,
} from '@mui/material';

import { sendForm } from './forms';

export const RegistrationDialog = ({ open, handleClose, course }) => {
	const [submitted, setSubmitted] = useState(false);
	const [formData, setFormData] = useState({ name: '', age: '', gender: '', email: '', phone: '' });

	const isPast = new Date(course.startDateEn) < new Date();
	const registrationType = isPast ? 'next' : course.spots.available ? 'payment' : 'waitlist';

	const submitText = registrationType === 'payment' ? 'לתשלום' : 'להרשמה';

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		setSubmitted(true);
		sendForm({
			...formData,
			registrationType,
			course: course.title,
			courseId: course.id,
		});
	};

	const clearForm = () => {
		setFormData({ name: '', age: '', gender: '', email: '', phone: '' });
		setSubmitted(false);
	};

	const onClose = () => {
		handleClose();
		setTimeout(clearForm, 500);
	};

	return (
		<Dialog
			open={open}
			onClose={onClose}
			sx={{ direction: 'rtl', textAlign: 'right' }}
			fullWidth
		>
			<DialogTitle>{!submitted ? 'הרשמה' : 'נרשמת בהצלחה! 🎉'}</DialogTitle>
			<DialogContent>
				{!submitted ? (
					<Box display="flex" flexDirection="column" gap={2}>
						<TextField placeholder="שם מלא" name="name" value={formData.name} onChange={handleChange} />
						<TextField fullWidth name="gender" placeholder="מגדר" value={formData.gender} onChange={handleChange}/>
						<TextField fullWidth name="age" placeholder="גיל" value={formData.age} onChange={handleChange}/>
						<TextField fullWidth placeholder="אימייל" name="email" value={formData.email} onChange={handleChange} />
						<TextField fullWidth placeholder="מספר טלפון" name="phone" value={formData.phone} onChange={handleChange} />
					</Box>
				) : (
					<Box mb={1}>
						<p>
								ניצור איתך קשר בקרוב{registrationType === 'payment' ? 'להשלמת התשלום ושליחת פרטים נוספים' : ''}.
							<br />
              מחכים לראות אותך!
						</p>
					</Box>
				)}
			</DialogContent>

			{!submitted && (
				<DialogActions sx={{ marginBottom: 1 }}>
					<Button onClick={onClose} color="default">ביטול</Button>
					<Button
						onClick={handleSubmit}
						variant="contained"
						sx={{ backgroundColor: 'rgb(34, 36, 42)', color: 'white' }}
						disabled={Object.values(formData).some(value => !value)}
					>
						{submitText}
					</Button>
				</DialogActions>
			)}
		</Dialog>
	);
};
