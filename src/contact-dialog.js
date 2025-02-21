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

export const ContactDialog = ({ open, handleClose }) => {
	const [submitted, setSubmitted] = useState(false);
	const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		setSubmitted(true);
		sendForm({
			...formData,
			registrationType: 'contact',
		});
	};

	const clearForm = () => {
		setFormData({ name: '', email: '', phone: '', message: '' });
		setSubmitted(false);
	};

	const onClose = () => {
		clearForm();
		handleClose();
	};

	return (
		<Dialog
			open={open}
			onClose={onClose}
			sx={{ direction: 'rtl', textAlign: 'right' }}
			fullWidth
		>
			<DialogTitle>{!submitted ? 'צור קשר' : 'נשלח בהצלחה! 🎉'}</DialogTitle>
			<DialogContent>
				{!submitted ? (
					<Box display="flex" flexDirection="column" gap={2}>
						<TextField placeholder="שם מלא" name="name" value={formData.name} onChange={handleChange} />
						<TextField fullWidth placeholder="אימייל" name="email" value={formData.email} onChange={handleChange} />
						<TextField fullWidth placeholder="מספר טלפון" name="phone" value={formData.phone} onChange={handleChange} />
						<TextField
							fullWidth
							placeholder="הודעה"
							name="message"
							value={formData.message}
							onChange={handleChange}
							multiline
							rows={4}
						/>
					</Box>
				) : (
					<Box mb={1}>
						<p>
              ניצור איתך קשר בקרוב!
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
						שלח
					</Button>
				</DialogActions>
			)}
		</Dialog>
	);
};
