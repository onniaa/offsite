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

const RegistrationDialog = ({ open, handleClose, isPayment }) => {
	const [submitted, setSubmitted] = useState(false);
	const [formData, setFormData] = useState({ name: '', age: '', gender: '', email: '', phone: '' });

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		setSubmitted(true);
		fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				...formData,
				access_key: '1d7f08e8-fb21-46a0-be6e-1a283f21c3b3',
			})
		})
			.catch(error => console.error('Error submitting form:', error));
	};

	const clearForm = () => {
		setFormData({ name: '', age: '', gender: '', email: '', phone: '' });
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
              ניצור איתך קשר בקרוב להשלמת התשלום ושליחת פרטים נוספים.
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
						{isPayment ? 'לתשלום' : 'להרשמה'}
					</Button>
				</DialogActions>
			)}
		</Dialog>
	);
};

export default RegistrationDialog;
