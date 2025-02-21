export const sendForm = async (form) => {
	try {
		await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				...form,
				access_key: '1d7f08e8-fb21-46a0-be6e-1a283f21c3b3',
			})
		});
	}
	catch (error) {
		console.error('Error submitting form:', error);
	}
};
