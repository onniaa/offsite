import React from 'react';
import { Chip } from '@mui/material';

export const AvailabilityChip = ({ availableSpots }) => {
	const color = availableSpots ? 'success' : 'default';
	const label = availableSpots ? `נותרו ${availableSpots} מקומות` : 'אין מקומות פנויים';

	return (
		<Chip
			size='small'
			label={label}
			color={color}
			sx={{ my: 1 }}
		/>
	);
};
